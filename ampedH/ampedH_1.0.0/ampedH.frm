VERSION 5.00
Begin VB.Form FormMain 
   BorderStyle     =   1  'Fixed Single
   Caption         =   "ampedH"
   ClientHeight    =   480
   ClientLeft      =   45
   ClientTop       =   375
   ClientWidth     =   4800
   Icon            =   "ampedH.frx":0000
   LinkTopic       =   "FormMain"
   MaxButton       =   0   'False
   ScaleHeight     =   480
   ScaleWidth      =   4800
   StartUpPosition =   2  '屏幕中心
   Begin VB.Timer TimerRefresh 
      Enabled         =   0   'False
      Interval        =   200
      Left            =   0
      Top             =   0
   End
   Begin VB.Label LabelInfo 
      Height          =   180
      Index           =   0
      Left            =   180
      TabIndex        =   0
      Top             =   180
      Visible         =   0   'False
      Width           =   4440
   End
   Begin VB.Label LabelReadme 
      Alignment       =   2  'Center
      Caption         =   "使用说明"
      Height          =   180
      Left            =   180
      TabIndex        =   1
      Top             =   180
      Width           =   2130
   End
   Begin VB.Label LabelHideMe 
      Alignment       =   2  'Center
      Caption         =   "隐藏工具"
      Height          =   180
      Left            =   2490
      TabIndex        =   2
      Top             =   180
      Width           =   2130
   End
End
Attribute VB_Name = "FormMain"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Option Explicit

Private Const NUM_HEIGHT = 180
Private Const NUM_MARGIN = 180
Private Handles() As Long
Private Infos() As INFO
Private Funcs() As FUNC
Private Fore As Long
Private Origin As Long

Private Function ReadConfig(lpFileName As String)
    TimerRefresh.Interval = GetPrivateProfileInt("Extend", "Interval", 200, lpFileName)
    Dim d As String
    d = "个人小屋:0x0100_0x1B_0,0x0100_0x1B_0,0x0101_0x1B_0,0x0101_0x1B_0,,0x0201_0_0x00D00100,0x0201_0_0x00D00100,0x0202_0_0x00D00100,0x0202_0_0x00D00100,,0x0100_0x410000_0,,,0x0101_0x410000_0,,0x0201_0_0x00D00100,0x0201_0_0x00D00100,0x0202_0_0x00D00100,0x0202_0_0x00D00100,,,,,,,0x0201_0_0x00D00100,0x0201_0_0x00D00100,0x0202_0_0x00D00100,0x0202_0_0x00D00100,|" & _
        "无人岛:0x0100_0x1B_0,0x0100_0x1B_0,0x0101_0x1B_0,0x0101_0x1B_0,,0x0100_0x78_0,0x0101_0x78_0,,,,0x0100_0x79_0,0x0100_0x79_0,0x0101_0x79_0,0x0101_0x79_0,,0x0201_0_0x00500040,0x0201_0_0x00500040,0x0202_0_0x00500040,0x0202_0_0x00500040,,0x0100_0x78_0,0x0101_0x78_0,,,,0x0201_0_0x01C000E0,0x0201_0_0x01C000E0,0x0202_0_0x01C000E0,0x0202_0_0x01C000E0,,0x0100_0x0D_0,0x0100_0x0D_0,0x0101_0x0D_0,0x0101_0x0D_0,,0x0100_0x78_0,0x0101_0x78_0,,,,0x0201_0_0x01800190,0x0201_0_0x01800190,0x0202_0_0x01800190,0x0202_0_0x01800190,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,"
    Dim s As String * 65526
    GetPrivateProfileString "Extend", "Script", d, s, Len(s), lpFileName
    Dim ss() As String
    ss = Split(":,|" & Trim(s), "|")
    ReDim Funcs(0 To UBound(ss) + 1)
    Dim i As Integer
    For i = 0 To UBound(ss)
        Dim l As Long
        l = InStr(ss(i), ":")
        Dim k As String
        k = Left(ss(i), l - 1)
        Dim v() As String
        v = Split(Right(ss(i), Len(ss(i)) - l), ",")
        Dim fun As FUNC
        fun.name = k
        Dim p1() As Long
        Dim p2() As Long
        Dim p3() As Long
        ReDim p1(0 To UBound(v) + 1) As Long
        ReDim p2(0 To UBound(v) + 1) As Long
        ReDim p3(0 To UBound(v) + 1) As Long
        Dim j As Integer
        For j = 0 To UBound(v)
            Dim p() As String
            p = Split(v(j), "_")
            If UBound(p) >= 0 Then
                p1(j + 1) = StringToLong(p(0))
            End If
            If UBound(p) >= 1 Then
                p2(j + 1) = StringToLong(p(1))
            End If
            If UBound(p) >= 2 Then
                p3(j + 1) = StringToLong(p(2))
            End If
        Next j
        fun.param1 = p1
        fun.param2 = p2
        fun.param3 = p3
        Funcs(i + 1) = fun
    Next i
End Function

Private Function InList(hWnds() As Long, hwnd As Long) As Boolean
    Dim i As Integer
    For i = 1 To UBound(hWnds)
        If hWnds(i) = hwnd Then
            InList = True
            Exit Function
        End If
    Next i
    InList = False
End Function
Private Sub RemoveList(hwnd As Long)
    Dim i As Integer
    For i = 1 To UBound(Handles)
        If Handles(i) = hwnd Then
            Dim j As Integer
            For j = i To UBound(Handles) - 1
                Handles(j) = Handles(j + 1)
            Next j
            For j = i To UBound(Infos) - 1
                Infos(j) = Infos(j + 1)
            Next j
            Unload LabelInfo(UBound(Handles))
            Exit For
        End If
    Next i
End Sub
Private Sub PushList(hwnd As Long)
    Handles(UBound(Handles)) = hwnd
    Dim inf As INFO
    inf.mode = 1
    inf.tick = 1
    Infos(UBound(Infos)) = inf
    Load LabelInfo(UBound(Handles))
    With LabelInfo(UBound(Handles))
        .Width = LabelInfo(0).Width
        .Height = NUM_HEIGHT
        .Move NUM_MARGIN, NUM_MARGIN + (NUM_MARGIN + NUM_HEIGHT) * UBound(Handles)
        .Visible = True
    End With
End Sub
Private Sub RefreshInfo(hWnds() As Long)
    Dim i As Integer
    Dim r As Integer
    r = 0
    Dim c As Boolean
    For i = 1 To UBound(Handles)
        If Not InList(hWnds, Handles(i - r)) Then
            RemoveList Handles(i + r)
            ReDim Preserve Handles(0 To (UBound(Handles) - 1))
            ReDim Preserve Infos(0 To (UBound(Infos) - 1))
            r = r + 1
            c = True
        End If
    Next i
    For i = 1 To UBound(hWnds)
        If Not InList(Handles, hWnds(i)) Then
            ReDim Preserve Handles(0 To (UBound(Handles) + 1))
            ReDim Preserve Infos(0 To (UBound(Infos) + 1))
            PushList hWnds(i)
            c = True
        End If
    Next i
    For i = 1 To UBound(Infos)
        Dim rec As RECT
        GetClientRect Handles(i), rec
        Infos(i).rec = rec
        Infos(i).active = (Fore = Handles(i))
        Infos(i).hide = (IsWindowVisible(Handles(i)) = 0)
        Infos(i).hung = IsHungAppWindow(Handles(i))
        LabelInfo(i).Caption = "窗体" & (i - 1) & " " & LongToHex(Handles(i)) & " " & (Infos(i).rec.Right - Infos(i).rec.Left) & "×" & (Infos(i).rec.Bottom - Infos(i).rec.Top) & " " & GetStatus(Infos(i)) & IIf(Funcs(Infos(i).mode).name <> "", " " & Funcs(Infos(i).mode).name & " " & Infos(i).tick & "/" & UBound(Funcs(Infos(i).mode).param1), "")
    Next i
    If c Then
      Me.Height = Me.Height - Me.ScaleHeight + NUM_HEIGHT + NUM_MARGIN * 2 + NUM_HEIGHT * (UBound(Handles) * 2)
    End If
End Sub
Private Sub RefreshWindows()
    Dim hWnds() As Long
    ReDim hWnds(0)
    Dim i As Integer
    i = 1
    Dim hwnd As Long
    hwnd = 0
    Do
        hwnd = FindWindowEx(0, hwnd, "runtimetest_win", "新热血英豪")
        If hwnd <> 0 Then
            ReDim Preserve hWnds(0 To i)
            hWnds(i) = hwnd
            i = i + 1
        End If
    Loop While hwnd > 0
    hwnd = 0
    Do
        hwnd = FindWindowEx(0, hwnd, "runtimetest_win", "GetAmped")
        If hwnd <> 0 Then
            ReDim Preserve hWnds(0 To i)
            hWnds(i) = hwnd
            i = i + 1
        End If
    Loop While hwnd > 0
    RefreshInfo hWnds
End Sub

Private Sub DoMissions()
    Dim i As Integer
    For i = 1 To UBound(Handles)
        Dim p1 As Long
        Dim p2 As Long
        Dim p3 As Long
        p1 = Funcs(Infos(i).mode).param1(Infos(i).tick)
        p2 = Funcs(Infos(i).mode).param2(Infos(i).tick)
        p3 = Funcs(Infos(i).mode).param3(Infos(i).tick)
        If ((p1 = WM_KEYDOWN) Or (p1 = WM_KEYUP)) And (p2 >= &H10000) Then
            p2 = p2 / &H10000
            If Handles(i) <> Fore Then
                SetForegroundWindow Handles(i)
                Origin = Fore
            End If
            keybd_event p2, 0, IIf(p1 = WM_KEYDOWN, KEYEVENTF_KEYDOWN, KEYEVENTF_KEYUP), 0
        ElseIf p1 > 0 Then
            Call PostMessage(Handles(i), p1, p2, p3)
        End If
        Infos(i).tick = IIf(Infos(i).tick < UBound(Funcs(Infos(i).mode).param1), Infos(i).tick + 1, 1)
    Next i
End Sub

Private Sub Form_Load()
    Dim hwnd As Long
    hwnd = FindWindow("ThunderRT6FormDC", "ampedH")
    If hwnd <> 0 Then
        If App.PrevInstance Then
            Me.Caption = ""
            Dim result As Long
            result = SetWindowPos(hwnd, HWND_TOPMOST, 0, 0, 0, 0, SWP_NOSIZE + SWP_NOMOVE + SWP_SHOWWINDOW)
            If result <> 0 Then
                End
            End If
        Else
            Call SetWindowPos(hwnd, HWND_TOPMOST, 0, 0, 0, 0, SWP_NOSIZE + SWP_NOMOVE)
        End If
    End If
    ReadConfig App.Path & "\ampedH.ini"
    ReDim Handles(0)
    ReDim Infos(0)
    TimerRefresh.Enabled = True
End Sub

Private Sub TimerRefresh_Timer()
    If Origin > 0 Then
        SetForegroundWindow Origin
        Fore = Origin
        Origin = 0
    Else
        Fore = GetForegroundWindow()
    End If
    RefreshWindows
    DoMissions
End Sub

Private Sub LabelInfo_MouseDown(Index As Integer, Button As Integer, Shift As Integer, x As Single, y As Single)
    Select Case Button
    Case 1
        Infos(Index).mode = IIf(Infos(Index).mode > 1, Infos(Index).mode - 1, UBound(Funcs))
        Infos(Index).tick = 1
    Case 2
        Infos(Index).mode = IIf(Infos(Index).mode < UBound(Funcs), Infos(Index).mode + 1, 1)
        Infos(Index).tick = 1
    Case 4
        If Infos(Index).hide Then
            ShowWindow Handles(Index)
        Else
            HideWindow Handles(Index)
        End If
    End Select
End Sub

Private Sub LabelInfo_DblClick(Index As Integer)
    If Infos(Index).hung Then
        KillWindow Handles(Index)
    End If
End Sub

Private Sub LabelReadme_Click()
    MsgBox "【使用说明】查看本工具使用说明。" & vbCrLf & "【隐藏工具】隐藏本工具窗体，再次运行exe后可重新显示。" & vbCrLf & vbCrLf & "本工具启动后会自行监测游戏窗体，支持多个窗体各自实现功能。" & vbCrLf & "所实现的功能可从ampedH.ini中重定义。" & vbCrLf & vbCrLf & "窗体信息中" & vbCrLf & "　　鼠标左键：逆序切换功能" & vbCrLf & "　　鼠标右键：顺序切换功能" & vbCrLf & "　　鼠标中键：隐藏/显示窗体" & vbCrLf & "当窗体挂起时上述操作双击均为强制关闭窗体。", vbOKOnly, "ampedH使用说明"
End Sub

Private Sub LabelHideMe_Click()
    Me.hide
End Sub

Private Sub Form_Unload(Cancel As Integer)
    Dim r As Integer
    r = MsgBox("是否关闭该程序？", vbYesNo + vbExclamation + vbDefaultButton2, "ampedH关闭确认")
    If r = vbNo Then
        Cancel = True
    End If
End Sub
