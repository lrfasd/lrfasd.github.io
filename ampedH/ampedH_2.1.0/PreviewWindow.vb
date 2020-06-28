Option Explicit On
Option Strict Off

Imports System.Windows.Interop

Public Class PreviewWindow
    Inherits AeroWindow

    Private _Hwnd As IntPtr = IntPtr.Zero
    Private _Size As Double = 1
    Private _Rect As RECT
    Private _Thumbnail As IntPtr = IntPtr.Zero

    Public Sub New(ByVal Hwnd As IntPtr, ByVal Size As Double, ByVal IsTopmost As Boolean)
        _Hwnd = Hwnd
        _Size = Size
        Me.WindowStyle = Windows.WindowStyle.None
        Me.ResizeMode = Windows.ResizeMode.NoResize
        Me.ShowInTaskbar = False
        Me.Topmost = IsTopmost
        Me.MoveButton = MouseButton.Right
    End Sub

    Public Sub ShowPreview(ByVal X As Integer, ByVal Y As Integer)
        If Me.IsAero AndAlso _Hwnd <> IntPtr.Zero AndAlso _Size > 0 Then
            GetClientRect(_Hwnd, _Rect)
            Me.Width = (_Rect.Right - _Rect.Left) * _Size
            Me.Height = (_Rect.Bottom - _Rect.Top) * _Size
            If X < 0 OrElse Y < 0 Then
                Dim Position As POINT = GetMousePosition()
                If X < 0 Then
                    Me.Left = Position.X
                    If Me.Left + Me.Width > SystemParameters.WorkArea.Width Then
                        If Me.Width < SystemParameters.WorkArea.Width Then
                            Me.Left = SystemParameters.WorkArea.Width - Me.Width
                        Else
                            Me.Left = 0
                        End If
                    End If
                Else
                    Me.Left = X
                End If
                If Y < 0 Then
                    Me.Top = Position.Y + 20
                    If Me.Top + Me.Height > SystemParameters.WorkArea.Height Then
                        If Me.Height < SystemParameters.WorkArea.Height Then
                            Me.Top = Position.Y - Me.Height
                        Else
                            Me.Top = 0
                        End If
                    End If
                Else
                    Me.Top = Y
                End If
            Else
                Me.Left = X
                Me.Top = Y
            End If
            Me.Show()
        End If
    End Sub

    Private Sub Me_IsVisibleChanged(sender As Object, e As System.Windows.DependencyPropertyChangedEventArgs) Handles Me.IsVisibleChanged
        If Me.IsVisible Then
            If _Thumbnail = IntPtr.Zero Then
                Try
                    DwmRegisterThumbnail(New WindowInteropHelper(Me).Handle, _Hwnd, _Thumbnail)
                Catch ex As Exception
                End Try
            End If
            Try
                Dim Position = GetClientToWindow(_Hwnd)
                DwmUpdateThumbnailProperties(_Thumbnail, New DwmThumbnailProperties(DwmThumbnailPropertie.DWM_TNP_RectDestination + DwmThumbnailPropertie.DWM_TNP_RectSource + DwmThumbnailPropertie.DWM_TNP_Opacity + DwmThumbnailPropertie.DWM_TNP_Visible + DwmThumbnailPropertie.DWM_TNP_SourceClientAreaOnly, New RECT(0, 0, Me.Width, Me.Height), New RECT(Position.X, Position.Y, Position.X + (_Rect.Right - _Rect.Left), Position.Y + _Rect.Bottom - _Rect.Top), 255, True, False))
            Catch ex As Exception
            End Try
        End If
    End Sub
    Private Sub PreviewWindow_Closed(sender As Object, e As System.EventArgs) Handles Me.Closed
        If _Thumbnail <> IntPtr.Zero Then
            Try
                DwmUnregisterThumbnail(_Thumbnail)
            Catch ex As Exception
            End Try
        End If
    End Sub

    Private Sub Me_SourceInitialized(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.SourceInitialized
        HwndSource.FromHwnd(New WindowInteropHelper(Me).Handle).AddHook(New HwndSourceHook(AddressOf WndProc))
    End Sub
    Private Function WndProc(ByVal Hwnd As IntPtr, ByVal Msg As Integer, ByVal WParam As Integer, ByVal LParam As Integer, ByRef Handled As Boolean) As IntPtr
        Select Case Msg
            Case WindowsMessage.WM_MouseMove, WindowsMessage.WM_LButtonDown, WindowsMessage.WM_LButtonUp, WindowsMessage.WM_LButtonDblClk, WindowsMessage.WM_RButtonDown, WindowsMessage.WM_RButtonUp, WindowsMessage.WM_RButtonDblClk, WindowsMessage.WM_MButtonDown, WindowsMessage.WM_MButtonUp, WindowsMessage.WM_MButtonDblClk, WindowsMessage.WM_XButtonDown, WindowsMessage.WM_XButtonUp, WindowsMessage.WM_XButtonDblClk
                Dim X As Integer = (LParam Mod &H10000) / _Size
                Dim Y As Integer = LParam / &H10000 / _Size
                PostMessage(_Hwnd, Msg, WParam, Y * &H10000 + X)
            Case WindowsMessage.WM_MouseWheel
                Dim Rect As RECT
                GetWindowRect(_Hwnd, Rect)
                Dim X As Integer = ((LParam Mod &H10000) - Me.Left) / _Size + Rect.Left
                Dim Y As Integer = (LParam / &H10000 - Me.Top) / _Size + Rect.Top
                PostMessage(_Hwnd, WindowsMessage.WM_MouseWheel, WParam, Y * &H10000 + X)
            Case WindowsMessage.WM_SysKeyDown, WindowsMessage.WM_SysKeyUp, WindowsMessage.WM_KeyDown, WindowsMessage.WM_KeyUp
                PostMessage(_Hwnd, Msg, WParam, LParam)
            Case WindowsMessage.WM_DwmCompositionChanged
                If Not Me.IsAero Then
                    Me.Hide()
                End If
        End Select
    End Function

End Class
