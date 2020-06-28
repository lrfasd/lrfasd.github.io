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
    Private Shared Function DwmEnableComposition(ByVal uCompositionAction As Integer) As Integer
    End Function
    <DllImport("Dwmapi.dll")> _
    Private Shared Function DwmExtendFrameIntoClientArea(ByVal Hwnd As IntPtr, ByRef pMarInset As Rects) As Integer
    End Function

    Private _IsEnableComposition As Boolean = False
    Private _IsAero As Boolean = False
    Private _Background As Brush = Brushes.White
    Private _IsLButtonDown As Boolean

    Public Sub New(Optional ByVal IsEnableComposition As Boolean = False)
        _IsEnableComposition = IsEnableComposition
    End Sub
    Private Sub AeroWindow_Loaded(ByVal sender As Object, ByVal e As System.Windows.RoutedEventArgs) Handles Me.Loaded
        TryAero()
    End Sub
    Private Sub TryAero()
        Try
            If _IsEnableComposition Then
                DwmEnableComposition(1)
            End If
            DwmIsCompositionEnabled(_IsAero)
            AeroSwitch(_IsAero)
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
                DwmExtendFrameIntoClientArea(s.Handle, New Rects(-1, -1, -1, -1))
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
        If e.ChangedButton = MouseButton.Left Then
            _IsLButtonDown = True
        End If
    End Sub

    Private Sub AeroWindow_MouseMove(ByVal sender As Object, ByVal e As System.Windows.Input.MouseEventArgs) Handles Me.MouseMove
        If _IsLButtonDown Then
            PostMessage(New WindowInteropHelper(Me).Handle, WindowsMessage.WM_NCLButtonDown, 2, 0)
            _IsLButtonDown = False
        End If
    End Sub

    Public ReadOnly Property IsAero As Boolean
        Get
            Return _IsAero
        End Get
    End Property

End Class

