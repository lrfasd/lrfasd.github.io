Option Explicit On
Option Strict Off

Imports System.Runtime.InteropServices
Imports System.Windows.Interop

Public Class AeroWindow
    Inherits Window

    <DllImport("Dwmapi.dll")> _
    Private Shared Function DwmIsCompositionEnabled(ByRef pfEnabled As Boolean) As Integer
    End Function
    <DllImport("Dwmapi.dll")> _
    Private Shared Function DwmExtendFrameIntoClientArea(ByVal Hwnd As IntPtr, ByRef pMarInset As RECT) As Integer
    End Function

    Private _IsAero As Boolean = False
    Private _MoveButton As MouseButton = MouseButton.Left
    Private _Background As Brush = Brushes.White
    Private _IsButtonDown As Boolean

    Public ReadOnly Property IsAero As Boolean
        Get
            Try
                DwmIsCompositionEnabled(_IsAero)
            Catch ex As Exception
            End Try
            Return _IsAero
        End Get
    End Property
    Public Property MoveButton As MouseButton
        Get
            Return _MoveButton
        End Get
        Set(Value As MouseButton)
            _MoveButton = Value
        End Set
    End Property

    Private Sub AeroWindow_Loaded(ByVal sender As Object, ByVal e As System.Windows.RoutedEventArgs) Handles Me.Loaded
        TryAero()
    End Sub
    Private Sub TryAero()
        Try
            AeroSwitch(Me.IsAero)
        Catch ex As Exception
        End Try
    End Sub
    Private Sub AeroSwitch(ByVal Switch As Boolean)
        If Switch Then
            _Background = Me.Background
            Me.Background = New SolidColorBrush(Colors.Transparent)
            Try
                Dim s As HwndSource = HwndSource.FromHwnd(New WindowInteropHelper(Me).Handle)
                s.CompositionTarget.BackgroundColor = Colors.Transparent
                DwmExtendFrameIntoClientArea(s.Handle, New RECT(-1, -1, -1, -1))
            Catch ex As Exception
                Me.Background = _Background
            End Try
        Else
            Me.Background = _Background
        End If
    End Sub

    Private Sub AeroWindow_SourceInitialized(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.SourceInitialized
        HwndSource.FromHwnd(New WindowInteropHelper(Me).Handle).AddHook(New HwndSourceHook(AddressOf WndProc))
    End Sub
    Private Function WndProc(ByVal Hwnd As IntPtr, ByVal Msg As Integer, ByVal WParam As Integer, ByVal LParam As Integer, ByRef Handled As Boolean) As IntPtr
        Select Case Msg
            Case WindowsMessage.WM_DwmCompositionChanged
                TryAero()
        End Select
    End Function

    Private Sub AeroWindow_MouseDown(ByVal sender As Object, ByVal e As System.Windows.Input.MouseButtonEventArgs) Handles Me.MouseDown
        If e.ChangedButton = _MoveButton Then
            _IsButtonDown = True
        End If
    End Sub
    Private Sub AeroWindow_MouseMove(ByVal sender As Object, ByVal e As System.Windows.Input.MouseEventArgs) Handles Me.MouseMove
        If _IsButtonDown Then
            _IsButtonDown = False
            PostMessage(New WindowInteropHelper(Me).Handle, WindowsMessage.WM_NCLButtonDown, HTCAPTION, 0)
        End If
    End Sub

End Class

