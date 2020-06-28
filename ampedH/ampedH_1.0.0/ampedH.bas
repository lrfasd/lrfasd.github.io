Attribute VB_Name = "ModuleMain"
Option Explicit
Public Declare Function GetPrivateProfileInt Lib "kernel32" Alias "GetPrivateProfileIntA" (ByVal lpApplicationName As String, ByVal lpKeyName As String, ByVal nDefault As Long, ByVal lpFileName As String) As Long
Public Declare Function GetPrivateProfileString Lib "kernel32" Alias "GetPrivateProfileStringA" (ByVal lpApplicationName As String, ByVal lpKeyName As String, ByVal lpDefault As String, ByVal lpReturnedString As String, ByVal nSize As Long, ByVal lpFileName As String) As Long
Public Declare Function FindWindow Lib "user32" Alias "FindWindowA" (ByVal lpClassName As String, ByVal lpWindowName As String) As Long
Public Declare Function FindWindowEx Lib "user32" Alias "FindWindowExA" (ByVal hwndParent As Long, ByVal hwndChildAfter As Long, ByVal lpszClass As String, ByVal lpszWindow As String) As Long
Public Declare Function GetClientRect Lib "user32 " (ByVal hwnd As Long, lpRect As RECT) As Long
Public Declare Function GetForegroundWindow Lib "user32" () As Long
Public Declare Function IsWindowVisible Lib "user32" (ByVal hwnd As Long) As Long
Public Declare Function IsHungAppWindow Lib "user32.dll" (ByVal hwnd As Long) As Long
Public Declare Function SetWindowPos Lib "user32" (ByVal hwnd As Long, ByVal hWndInsertAfter As Long, ByVal x As Long, ByVal y As Long, ByVal cx As Long, ByVal cy As Long, ByVal wFlags As Long) As Long
Public Const HWND_TOPMOST = -1
Public Const SWP_NOSIZE = &H1
Public Const SWP_NOMOVE = &H2
Public Const SWP_NOZORDER = &H4
Public Const SWP_NOACTIVATE = &H10
Public Const SWP_SHOWWINDOW = &H40
Public Const SWP_HIDEWINDOW = &H80
Public Declare Function GetWindowThreadProcessId Lib "user32" (ByVal hwnd As Long, lpdwProcessId As Long) As Long
Public Declare Function OpenProcess Lib "kernel32" (ByVal dwDesiredAccess As Long, ByVal bInheritHandle As Long, ByVal dwProcessId As Long) As Long
Public Declare Function TerminateProcess Lib "kernel32" (ByVal hProcess As Long, ByVal uExitCode As Long) As Long
Public Declare Function CloseHandle Lib "kernel32" (ByVal hObject As Long) As Long
Public Declare Function PostMessage Lib "user32" Alias "PostMessageA" (ByVal hwnd As Long, ByVal wMsg As Long, ByVal wParam As Long, ByVal lParam As Long) As Long
Public Const WM_KEYDOWN = &H100
Public Const WM_KEYUP = &H101
Public Const WM_SYSKEYDOWN = &H104
Public Const WM_SYSKEYUP = &H105
Public Const WM_LBUTTONDOWN = &H201
Public Const WM_LBUTTONUP = &H202
Public Const WM_RBUTTONDOWN = &H204
Public Const WM_RBUTTONUP = &H205
Public Const WM_MBUTTONDOWN = &H207
Public Const WM_MBUTTONUP = &H208
Public Const VK_RETURN = &HD
Public Const VK_ESCAPE = &H1B
Public Const VK_A = &H41
Public Const VK_F5 = &H74
Public Const VK_F9 = &H78
Public Const VK_F10 = &H79
Public Declare Function SetForegroundWindow Lib "user32" (ByVal hwnd As Long) As Long
Public Declare Sub keybd_event Lib "user32" (ByVal bVk As Byte, ByVal bScan As Byte, ByVal dwFlags As Long, ByVal dwExtraInfo As Long)
Public Const KEYEVENTF_KEYDOWN = &H0
Public Const KEYEVENTF_KEYUP = &H2

Public Type RECT
    Left As Long
    Top As Long
    Right As Long
    Bottom As Long
End Type

Public Type INFO
    rec As RECT
    active As Boolean
    hide As Boolean
    hung As Boolean
    mode As Long
    tick As Long
End Type

Public Type FUNC
    name As String
    param1() As Long
    param2() As Long
    param3() As Long
End Type

Public Function StringToLong(nValue As String) As Long
    If Len(nValue) > 2 Then
        Dim p As String
        p = Mid(nValue, 1, 2)
        Dim v As String
        v = Mid(nValue, 3, Len(nValue) - 2)
        If (p = "&H") Or (p = "&h") Or (p = "0x") Or (p = "0X") Then
            While Len(v) < 8
                v = "0" & v
            Wend
            nValue = "&H" & v
        End If
    End If
    StringToLong = Val(nValue)
End Function
Public Function LongToHex(nValue As Long) As String
    LongToHex = Hex(nValue)
    While Len(LongToHex) < 8
        LongToHex = "0" & LongToHex
    Wend
End Function
Public Function GetStatus(inf As INFO) As String
    If inf.hung Then
        GetStatus = "挂起"
    ElseIf inf.hide Then
        GetStatus = "隐藏"
    ElseIf inf.active Then
        GetStatus = "前端"
    Else
        GetStatus = "后台"
    End If
End Function

Public Sub HideWindow(ByVal hwnd As Long)
    Call SetWindowPos(hwnd, 0, 0, 0, 0, 0, SWP_NOSIZE + SWP_NOMOVE + SWP_NOZORDER + SWP_NOACTIVATE + SWP_HIDEWINDOW)
End Sub
Public Sub ShowWindow(ByVal hwnd As Long)
    Call SetWindowPos(hwnd, 0, 0, 0, 0, 0, SWP_NOSIZE + SWP_NOMOVE + SWP_NOZORDER + SWP_NOACTIVATE + SWP_SHOWWINDOW)
End Sub
Public Sub KillWindow(ByVal hwnd As Long)
    Dim lpdwProcessId As Long
    GetWindowThreadProcessId hwnd, lpdwProcessId
    Dim hProcessHandle As Long
    hProcessHandle = OpenProcess(&H1F0FFF, True, lpdwProcessId)
    If hProcessHandle <> 0 Then
        TerminateProcess hProcessHandle, ByVal 0&
    End If
    CloseHandle hProcessHandle
End Sub
