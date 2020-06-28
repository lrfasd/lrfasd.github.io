Option Explicit On
Option Strict Off

Class Application

    Private Sub Application_Startup(ByVal sender As Object, ByVal e As System.Windows.StartupEventArgs) Handles Me.Startup
        If (Environment.CurrentDirectory & "\").StartsWith(System.IO.Path.GetTempPath & "Rar$EXa0.") Then
            MessageBox.Show("请先从压缩包中解压后再运行本程序。", "ampedH")
            Application.Current.Shutdown()
        End If
        Dim IsExtend As Boolean
        If e.Args.Length > 0 Then
            For Each p As String In e.Args
                Select Case p
                    Case "/e"
                        IsExtend = True
                End Select
            Next
        End If
        Dim a As ampedH = New ampedH(IsExtend OrElse (Keyboard.Modifiers And ModifierKeys.Shift) > 0)
        a.Show()
    End Sub

End Class