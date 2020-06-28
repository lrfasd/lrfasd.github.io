Option Explicit On
Option Strict Off

Imports System.Windows.Media.Effects
Imports System.Windows.Interop

Public Class GlowTextBlock
    Inherits TextBlock

    Private _Preview As PreviewWindow
    Private _IsLButtonDown As Boolean
    Private _IsRButtonDown As Boolean
    Private _IsDoing As Boolean

    Public Sub New(ByVal Text As String, ByVal FontFamily As FontFamily, ByVal FontSize As Double)
        Me.UseLayoutRounding = True
        Me.FontFamily = FontFamily
        Me.FontSize = FontSize
        Me.Text = Text
        Dim DropShadowEffect As DropShadowEffect = New DropShadowEffect
        DropShadowEffect.Color = Colors.White
        DropShadowEffect.ShadowDepth = 0
        DropShadowEffect.BlurRadius = FontSize
        Me.Effect = DropShadowEffect
    End Sub

    Public Property Preview As PreviewWindow
        Get
            Return _Preview
        End Get
        Set(value As PreviewWindow)
            _Preview = value
        End Set
    End Property

    Private Sub Me_MouseDown(ByVal sender As Object, ByVal e As System.Windows.Input.MouseButtonEventArgs) Handles Me.MouseDown
        If _IsDoing Then
            _IsDoing = False
            _IsLButtonDown = False
            _IsRButtonDown = False
        End If
        Select Case e.ChangedButton
            Case MouseButton.Left
                _IsLButtonDown = True
            Case MouseButton.Right
                _IsRButtonDown = True
        End Select
        If _IsLButtonDown AndAlso _IsRButtonDown Then
            _IsDoing = True
            If _Preview.IsVisible Then
                _Preview.Hide()
            Else
                Dim X As Integer = -1
                Dim Y As Integer = -1
                Dim ToolTip As ToolTip = CType(Me.ToolTip, ToolTip)
                Dim PresentationSource As PresentationSource = PresentationSource.FromVisual(ToolTip)
                If Not PresentationSource Is Nothing Then
                    Dim Rect As RECT
                    GetWindowRect(CType(PresentationSource, HwndSource).Handle, Rect)
                    X = Rect.Left
                    Y = Rect.Top
                End If
                _Preview.ShowPreview(X, Y)
            End If
        End If
    End Sub
    Private Sub Me_MouseUp(ByVal sender As Object, ByVal e As System.Windows.Input.MouseButtonEventArgs) Handles Me.MouseUp
        Select Case e.ChangedButton
            Case MouseButton.Left
                _IsLButtonDown = False
            Case MouseButton.Right
                _IsRButtonDown = False
        End Select
        If _IsDoing Then
            e.Handled = True
            If Not _IsLButtonDown AndAlso Not _IsRButtonDown Then
                _IsDoing = False
            End If
        End If
    End Sub

End Class
