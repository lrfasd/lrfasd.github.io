Option Explicit On
Option Strict Off

Imports System.Runtime.InteropServices
Imports System.Windows.Interop

Module UserModule

    <DllImport("user32.dll", EntryPoint:="FindWindowExA")> _
    Public Function FindWindowEx(ByVal HwndParent As IntPtr, ByVal HwndChildAfter As IntPtr, ByVal lpszClass As String, ByVal lpszWindow As String) As IntPtr
    End Function
    <DllImport("user32.dll")> _
    Public Function IsIconic(ByVal Hwnd As IntPtr) As Integer
    End Function
    <DllImport("user32.dll")> _
    Public Function ShowWindow(ByVal Hwnd As IntPtr, ByVal nCmdShow As Integer) As Integer
    End Function
    Public Const SW_RESTORE = &H9
    <DllImport("user32.dll")> _
    Public Function GetClientRect(ByVal Hwnd As IntPtr, ByRef lpRect As RECT) As Integer
    End Function
    <DllImport("user32.dll")> _
    Public Function GetWindowRect(ByVal Hwnd As IntPtr, ByRef lpRect As RECT) As Integer
    End Function
    <DllImport("user32.dll")> _
    Public Function GetForegroundWindow() As IntPtr
    End Function
    <DllImport("user32.dll")> _
    Public Function IsWindowVisible(ByVal Hwnd As IntPtr) As Integer
    End Function
    <DllImport("user32.dll")> _
    Public Function SetWindowPos(ByVal Hwnd As IntPtr, ByVal HwndInsertAfter As IntPtr, ByVal x As Integer, ByVal y As Integer, ByVal cx As Integer, ByVal cy As Integer, ByVal wFlags As Integer) As Integer
    End Function
    Public Const HWND_TOPMOST = -1
    Public Const SWP_NOSIZE = &H1
    Public Const SWP_NOMOVE = &H2
    Public Const SWP_NOZORDER = &H4
    Public Const SWP_NOACTIVATE = &H10
    Public Const SWP_SHOWWINDOW = &H40
    Public Const SWP_HIDEWINDOW = &H80
    <DllImport("user32.dll")> _
    Public Function GetWindowThreadProcessId(ByVal Hwnd As IntPtr, ByRef lpdwProcessId As Integer) As Integer
    End Function
    <DllImport("kernel32.dll")> _
    Public Function OpenProcess(ByVal dwDesiredAccess As Integer, ByVal bInheritHandle As Integer, ByVal dwProcessId As Integer) As Integer
    End Function
    <DllImport("kernel32.dll")> _
    Public Function TerminateProcess(ByVal hProcess As Integer, ByVal uExitCode As Integer) As Integer
    End Function
    <DllImport("kernel32.dll")> _
    Public Function CloseHandle(ByVal hObject As Integer) As Integer
    End Function
    <DllImport("user32.dll", EntryPoint:="PostMessageA")> _
    Public Function PostMessage(ByVal Hwnd As IntPtr, ByVal wMsg As Integer, ByVal wParam As Integer, ByVal lParam As Integer) As Integer
    End Function
    Public Const HTCAPTION = &H2
    <DllImport("user32.dll")> _
    Public Function SetForegroundWindow(ByVal Hwnd As IntPtr) As Integer
    End Function
    <DllImport("user32.dll")> _
    Public Sub keybd_event(ByVal bVk As Byte, ByVal bScan As Byte, ByVal dwFlags As Integer, ByVal dwExtraInfo As Integer)
    End Sub
    Public Const KEYEVENTF_KEYDOWN = &H0
    Public Const KEYEVENTF_KEYUP = &H2
    <DllImport("user32.dll", CharSet:=CharSet.Auto)> _
    Public Function GetCursorPos(ByRef lpPoint As Point) As Boolean
    End Function
    <DllImport("user32.dll")> _
    Public Function GetSystemMenu(ByVal Hwnd As IntPtr, ByVal bRevert As Integer) As Integer
    End Function
    <DllImport("user32.dll", EntryPoint:="AppendMenuA")> _
    Public Function AppendMenu(ByVal hMenu As IntPtr, ByVal wFlags As Integer, ByVal wIDNewItem As Integer, <MarshalAsAttribute(UnmanagedType.AsAny)> ByVal lpNewItem As Object) As Integer
    End Function
    <DllImport("dwmapi.dll")> _
    Public Function DwmRegisterThumbnail(ByVal hwndDestination As IntPtr, ByVal hwndSource As IntPtr, ByRef phThumbnailId As IntPtr) As Integer
    End Function
    <DllImport("dwmapi.dll")> _
    Public Function DwmUnregisterThumbnail(ByVal hThumbnailId As IntPtr) As Integer
    End Function
    <DllImport("dwmapi.dll")> _
    Public Function DwmUpdateThumbnailProperties(ByVal hThumbnailId As IntPtr, ByRef ptnProperties As DwmThumbnailProperties) As Integer
    End Function
    <StructLayout(LayoutKind.Sequential)> _
    Public Structure DwmThumbnailProperties

        Public dwFlags As Integer
        Public rcDestination As RECT
        Public rcSource As RECT
        Public opacity As Byte
        Public fVisible As Boolean
        Public fSourceClientAreaOnly As Boolean

        Public Sub New(ByVal dwFlags As Integer, ByVal rcDestination As RECT, ByVal rcSource As RECT, ByVal opacity As Byte, ByVal fVisible As Boolean, ByVal fSourceClientAreaOnly As Boolean)
            Me.dwFlags = dwFlags
            Me.rcDestination = rcDestination
            Me.rcSource = rcSource
            Me.opacity = opacity
            Me.fVisible = fVisible
            Me.fSourceClientAreaOnly = fSourceClientAreaOnly
        End Sub

    End Structure
    <Flags()>
    Public Enum DwmThumbnailPropertie

        DWM_TNP_RectDestination = &H1
        DWM_TNP_RectSource = &H2
        DWM_TNP_Opacity = &H4
        DWM_TNP_Visible = &H8
        DWM_TNP_SourceClientAreaOnly = &H10

    End Enum

    Public Enum WindowsMessage

        WM_NCLButtonDown = &HA1
        WM_KeyDown = &H100
        WM_KeyUp = &H101
        WM_SysKeyDown = &H104
        WM_SysKeyUp = &H105
        WM_SysCommand = &H112
        WM_MouseMove = &H200
        WM_LButtonDown = &H201
        WM_LButtonUp = &H202
        WM_LButtonDblClk = &H203
        WM_RButtonDown = &H204
        WM_RButtonUp = &H205
        WM_RButtonDblClk = &H206
        WM_MButtonDown = &H207
        WM_MButtonUp = &H208
        WM_MButtonDblClk = &H209
        WM_MouseWheel = &H20A
        WM_XButtonDown = &H20B
        WM_XButtonUp = &H20C
        WM_XButtonDblClk = &H20D
        WM_DwmColorizationColorChanged = &H31D
        WM_DwmCompositionChanged = &H31E
        WM_DwmNCRenderingChanged = &H31F
        WM_DwmSendIconicLivePreviewBitmap = &H320
        WM_DwmSendIconicThumbnail = &H321
        WM_DwmWindowMaximizedChange = &H322

    End Enum


    <StructLayout(LayoutKind.Sequential)> _
    Public Structure POINT

        Public X As Integer
        Public Y As Integer

        Public Sub New(ByVal X As Integer, ByVal Y As Integer)
            Me.X = X
            Me.Y = Y
        End Sub

    End Structure
    <StructLayout(LayoutKind.Sequential)> _
    Public Structure RECT

        Public Left As Integer
        Public Top As Integer
        Public Right As Integer
        Public Bottom As Integer

        Public Sub New(ByVal Left As Integer, ByVal Top As Integer, ByVal Right As Integer, ByVal Bottom As Integer)
            Me.Left = Left
            Me.Right = Right
            Me.Top = Top
            Me.Bottom = Bottom
        End Sub

    End Structure
    <StructLayout(LayoutKind.Sequential)> _
    Public Structure Param

        Public Param1 As Integer
        Public Param2 As Integer
        Public Param3 As Integer

        Public Sub New(ByVal Param1 As Integer, ByVal Param2 As Integer, ByVal Param3 As Integer)
            Me.Param1 = Param1
            Me.Param2 = Param2
            Me.Param3 = Param3
        End Sub

    End Structure
    <StructLayout(LayoutKind.Sequential)> _
    Public Structure Info

        Public Handle As IntPtr
        Public Rect As RECT
        Public Size As String
        Public Active As Boolean
        Public Hide As Boolean
        Public Thumbnail As IntPtr
        Public Mode As Integer
        Public Tick As Integer

    End Structure

    Public Function StringToInteger(ByVal Value As String) As Integer
        If Value.Length > 2 Then
            Dim p As String = Mid(Value, 1, 2)
            Dim v As String = Mid(Value, 3, Value.Length - 2)
            If p = "&H" OrElse p = "&h" OrElse p = "0x" OrElse p = "0X" Then
                While v.Length < 8
                    v = "0" & v
                End While
                Value = "&H" & v
            End If
        End If
        Return Val(Value)
    End Function
    Public Function IntegerToHex(ByVal Value As Integer) As String
        Dim Result As String = Hex(Value)
        While Result.Length < 8
            Result = "0" & Result
        End While
        Return Result
    End Function
    Public Function GetStatus(ByVal Info As Info) As String
        If Info.Hide Then
            Return "隐藏"
        ElseIf Info.Active Then
            Return "前端"
        Else
            Return "后台"
        End If
    End Function
    Public Function GetMousePosition() As POINT
        Dim Position As POINT
        GetCursorPos(Position)
        Return Position
    End Function
    Public Function GetClientToWindow(ByVal Hwnd As IntPtr) As POINT
        Dim WindowRect As RECT
        GetWindowRect(Hwnd, WindowRect)
        Dim ClientRect As RECT
        GetClientRect(Hwnd, ClientRect)
        Dim x As Double = ((WindowRect.Right - WindowRect.Left) - (ClientRect.Right - ClientRect.Left)) / 2
        Dim y As Double = (WindowRect.Bottom - WindowRect.Top) - (ClientRect.Bottom - ClientRect.Top) - x
        Return New POINT(x, y)
    End Function

    Public Sub SetWindowHide(ByVal Hwnd As IntPtr)
        SetWindowPos(Hwnd, 0, 0, 0, 0, 0, SWP_NOSIZE + SWP_NOMOVE + SWP_NOZORDER + SWP_NOACTIVATE + SWP_HIDEWINDOW)
    End Sub
    Public Sub SetWindowShow(ByVal Hwnd As IntPtr, Optional ByVal IsTopMost As Boolean = False)
        If IsTopMost Then
            SetWindowPos(Hwnd, HWND_TOPMOST, 0, 0, 0, 0, SWP_NOSIZE + SWP_NOMOVE + SWP_SHOWWINDOW)
        Else
            SetWindowPos(Hwnd, 0, 0, 0, 0, 0, SWP_NOSIZE + SWP_NOMOVE + SWP_NOZORDER + SWP_NOACTIVATE + SWP_SHOWWINDOW)
        End If
    End Sub
    Public Sub SetWindowRestore(ByVal Hwnd As IntPtr)
        ShowWindow(Hwnd, SW_RESTORE)
    End Sub
    Public Sub SetWindowKill(ByVal Hwnd As IntPtr)
        Dim lpdwProcessId As Long
        GetWindowThreadProcessId(Hwnd, lpdwProcessId)
        Dim hProcessHandle As Long = OpenProcess(&H1F0FFF, 1, lpdwProcessId)
        If hProcessHandle <> 0 Then
            TerminateProcess(hProcessHandle, 0)
        End If
        CloseHandle(hProcessHandle)
    End Sub

End Module
