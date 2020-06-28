Option Explicit On
Option Strict Off

Imports System.Data
Imports System.Windows.Shell
Imports System.Windows.Interop
Imports System.Runtime.InteropServices
Imports System.Windows.Threading
Imports System.Windows.Media.Effects

Class ampedH
    Inherits AeroWindow

    Private Timer As DispatcherTimer = New DispatcherTimer
    Private StackPanel As StackPanel = New StackPanel
    Private Classes As String()
    Private Titles As String()
    Private Funcs As Dictionary(Of String, Dictionary(Of String, List(Of Param))) = New Dictionary(Of String, Dictionary(Of String, List(Of Param)))
    Private Infos As Info()
    Private Fore As IntPtr = IntPtr.Zero
    Private Origin As IntPtr = IntPtr.Zero

    Public Sub New(Optional ByVal IsExtend As Boolean = False)
        MyBase.New(IsExtend)
        CheckSingle()
        Me.Width = 400
        Me.Height = 0
        Me.Title = "ampedH"
        Me.Icon = BitmapFrame.Create(New Uri("pack://application:,,,/ampedH.ico", UriKind.RelativeOrAbsolute))
        Me.ResizeMode = Windows.ResizeMode.CanMinimize
        Me.WindowStartupLocation = WindowStartupLocation.CenterScreen
        Me.Topmost = True
        Me.TaskbarItemInfo = New TaskbarItemInfo
        LoadControl()
        SetJumpList()
        ReadConfig()
        ReDim Infos(0 To -1)
    End Sub
    Private Sub CheckSingle()
        Dim Processes As Process() = Process.GetProcessesByName(Process.GetCurrentProcess.ProcessName)
        If Processes.Length > 1 Then
            Dim Handle As IntPtr = FindWindowEx(IntPtr.Zero, IntPtr.Zero, vbNullString, Process.GetCurrentProcess.ProcessName)
            If Handle <> IntPtr.Zero Then
                SetWindowShow(Handle, True)
                If IsIconic(Handle) Then
                    SetWindowRestore(Handle)
                Else
                    SetForegroundWindow(Handle)
                End If
                End
            End If
        End If
    End Sub
    Private Sub LoadControl()
        AddHandler Timer.Tick, AddressOf Timer_Tick
        Me.Content = StackPanel
    End Sub
    Private Sub SetJumpList()
        Const p As String = "C:\Program Files\Internet Explorer\iexplore.exe"
        Dim j As JumpList = New JumpList
        j.JumpItems.Add(New JumpTask With {.CustomCategory = "链接", .Title = "加入QQ交流群", .Description = "加入QQ交流群", .ApplicationPath = "http://shang.qq.com/wpa/qunwpa?idkey=11334256789a3e86e679f77ae86fb5f26d9e3baaff07f166f653df49a745a0f1", .IconResourcePath = p})
        j.JumpItems.Add(New JumpTask With {.CustomCategory = "链接", .Title = "联系作者QQ", .Description = "联系作者QQ", .ApplicationPath = "http://wpa.qq.com/msgrd?v=3&uin=308973930&site=ampedH&menu=yes", .IconResourcePath = p})
        JumpList.SetJumpList(Global.ampedH.Application.Current, j)
    End Sub
    Private Sub ReadConfig()
        Dim Reader As IniReader = New IniReader(Environment.CurrentDirectory & "\ampedH.ini")
        Timer.Interval = New TimeSpan(Reader.ReadInteger("Timer", "Interval", 200) * 10000)
        Classes = Reader.ReadString("Window", "Classes", "runtimetest_win").Split(",")
        Titles = Reader.ReadString("Window", "Titles", "新热血英豪,GetApmed,겟앰프드,????").Split(",")
        Dim Scripts As Dictionary(Of String, String) = New Dictionary(Of String, String)
        Scripts.Add("640×480", "个人小屋:0x0100_0x1B_0,0x0100_0x1B_0,0x0101_0x1B_0,0x0101_0x1B_0,,0x0201_0_0x00A000D0,0x0201_0_0x00A000D0,0x0202_0_0x00A000D0,0x0202_0_0x00A000D0,,0x0100_0x410000_0,,,0x0101_0x410000_0,,0x0201_0_0x00A000D0,0x0201_0_0x00A000D0,0x0202_0_0x00A000D0,0x0202_0_0x00A000D0,,,,,,,0x0201_0_0x00A000D0,0x0201_0_0x00A000D0,0x0202_0_0x00A000D0,0x0202_0_0x00A000D0,|无人岛:0x0100_0x1B_0,0x0100_0x1B_0,0x0101_0x1B_0,0x0101_0x1B_0,,0x0100_0x78_0,0x0101_0x78_0,,,,0x0100_0x79_0,0x0100_0x79_0,0x0101_0x79_0,0x0101_0x79_0,,0x0201_0_0x00400040,0x0201_0_0x00400040,0x0202_0_0x00400040,0x0202_0_0x00400040,,0x0100_0x78_0,0x0101_0x78_0,,,,0x0201_0_0x01600060,0x0201_0_0x01600060,0x0202_0_0x01600060,0x0202_0_0x01600060,,0x0100_0x0D_0,0x0100_0x0D_0,0x0101_0x0D_0,0x0101_0x0D_0,,0x0100_0x78_0,0x0101_0x78_0,,,,0x0201_0_0x01300130,0x0201_0_0x01300130,0x0202_0_0x01300130,0x0202_0_0x01300130,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,")
        Scripts.Add("800×600", "个人小屋:0x0100_0x1B_0,0x0100_0x1B_0,0x0101_0x1B_0,0x0101_0x1B_0,,0x0201_0_0x00D00100,0x0201_0_0x00D00100,0x0202_0_0x00D00100,0x0202_0_0x00D00100,,0x0100_0x410000_0,,,0x0101_0x410000_0,,0x0201_0_0x00D00100,0x0201_0_0x00D00100,0x0202_0_0x00D00100,0x0202_0_0x00D00100,,,,,,,0x0201_0_0x00D00100,0x0201_0_0x00D00100,0x0202_0_0x00D00100,0x0202_0_0x00D00100,|无人岛:0x0100_0x1B_0,0x0100_0x1B_0,0x0101_0x1B_0,0x0101_0x1B_0,,0x0100_0x78_0,0x0101_0x78_0,,,,0x0100_0x79_0,0x0100_0x79_0,0x0101_0x79_0,0x0101_0x79_0,,0x0201_0_0x00500040,0x0201_0_0x00500040,0x0202_0_0x00500040,0x0202_0_0x00500040,,0x0100_0x78_0,0x0101_0x78_0,,,,0x0201_0_0x01C000E0,0x0201_0_0x01C000E0,0x0202_0_0x01C000E0,0x0202_0_0x01C000E0,,0x0100_0x0D_0,0x0100_0x0D_0,0x0101_0x0D_0,0x0101_0x0D_0,,0x0100_0x78_0,0x0101_0x78_0,,,,0x0201_0_0x01800190,0x0201_0_0x01800190,0x0202_0_0x01800190,0x0202_0_0x01800190,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,")
        Scripts.Add("1024×768", "个人小屋:0x0100_0x1B_0,0x0100_0x1B_0,0x0101_0x1B_0,0x0101_0x1B_0,,0x0201_0_0x01000150,0x0201_0_0x01000150,0x0202_0_0x01000150,0x0202_0_0x01000150,,0x0100_0x410000_0,,,0x0101_0x410000_0,,0x0201_0_0x01000150,0x0201_0_0x01000150,0x0202_0_0x01000150,0x0202_0_0x01000150,,,,,,,0x0201_0_0x01000150,0x0201_0_0x01000150,0x0202_0_0x01000150,0x0202_0_0x01000150,|无人岛:0x0100_0x1B_0,0x0100_0x1B_0,0x0101_0x1B_0,0x0101_0x1B_0,,0x0100_0x78_0,0x0101_0x78_0,,,,0x0100_0x79_0,0x0100_0x79_0,0x0101_0x79_0,0x0101_0x79_0,,0x0201_0_0x00600050,0x0201_0_0x00600050,0x0202_0_0x00600050,0x0202_0_0x00600050,,0x0100_0x78_0,0x0101_0x78_0,,,,0x0201_0_0x02400090,0x0201_0_0x02400090,0x0202_0_0x02400090,0x0202_0_0x02400090,,0x0100_0x0D_0,0x0100_0x0D_0,0x0101_0x0D_0,0x0101_0x0D_0,,0x0100_0x78_0,0x0101_0x78_0,,,,0x0201_0_0x01E00200,0x0201_0_0x01E00200,0x0202_0_0x01E00200,0x0202_0_0x01E00200,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,")
        Scripts.Add("1280×960", "个人小屋:0x0100_0x1B_0,0x0100_0x1B_0,0x0101_0x1B_0,0x0101_0x1B_0,,0x0201_0_0x014001B0,0x0201_0_0x014001B0,0x0202_0_0x014001B0,0x0202_0_0x014001B0,,0x0100_0x410000_0,,,0x0101_0x410000_0,,0x0201_0_0x014001B0,0x0201_0_0x014001B0,0x0202_0_0x014001B0,0x0202_0_0x014001B0,,,,,,,0x0201_0_0x014001B0,0x0201_0_0x014001B0,0x0202_0_0x014001B0,0x0202_0_0x014001B0,|无人岛:0x0100_0x1B_0,0x0100_0x1B_0,0x0101_0x1B_0,0x0101_0x1B_0,,0x0100_0x78_0,0x0101_0x78_0,,,,0x0100_0x79_0,0x0100_0x79_0,0x0101_0x79_0,0x0101_0x79_0,,0x0201_0_0x00800050,0x0201_0_0x00800050,0x0202_0_0x00800050,0x0202_0_0x00800050,,0x0100_0x78_0,0x0101_0x78_0,,,,0x0201_0_0x02D000E0,0x0201_0_0x02D000E0,0x0202_0_0x02D000E0,0x0202_0_0x02D000E0,,0x0100_0x0D_0,0x0100_0x0D_0,0x0101_0x0D_0,0x0101_0x0D_0,,0x0100_0x78_0,0x0101_0x78_0,,,,0x0201_0_0x02600280,0x0201_0_0x02600280,0x0202_0_0x02600280,0x0202_0_0x02600280,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,")
        Scripts.Add("1280×720", "个人小屋:0x0100_0x1B_0,0x0100_0x1B_0,0x0101_0x1B_0,0x0101_0x1B_0,,0x0201_0_0x01000200,0x0201_0_0x01000200,0x0202_0_0x01000200,0x0202_0_0x01000200,,0x0100_0x410000_0,,,0x0101_0x410000_0,,0x0201_0_0x01000200,0x0201_0_0x01000200,0x0202_0_0x01000200,0x0202_0_0x01000200,,,,,,,0x0201_0_0x01000200,0x0201_0_0x01000200,0x0202_0_0x01000200,0x0202_0_0x01000200,|无人岛:0x0100_0x1B_0,0x0100_0x1B_0,0x0101_0x1B_0,0x0101_0x1B_0,,0x0100_0x78_0,0x0101_0x78_0,,,,0x0100_0x79_0,0x0100_0x79_0,0x0101_0x79_0,0x0101_0x79_0,,0x0201_0_0x00500040,0x0201_0_0x00500040,0x0202_0_0x00500040,0x0202_0_0x00500040,,0x0100_0x78_0,0x0101_0x78_0,,,,0x0201_0_0x01C000E0,0x0201_0_0x01C000E0,0x0202_0_0x01C000E0,0x0202_0_0x01C000E0,,0x0100_0x0D_0,0x0100_0x0D_0,0x0101_0x0D_0,0x0101_0x0D_0,,0x0100_0x78_0,0x0101_0x78_0,,,,0x0201_0_0x01B00280,0x0201_0_0x01B00280,0x0202_0_0x01B00280,0x0202_0_0x01B00280,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,")
        Scripts.Add("1600×900", "个人小屋:0x0100_0x1B_0,0x0100_0x1B_0,0x0101_0x1B_0,0x0101_0x1B_0,,0x0201_0_0x01300200,0x0201_0_0x01300200,0x0202_0_0x01300200,0x0202_0_0x01300200,,0x0100_0x410000_0,,,0x0101_0x410000_0,,0x0201_0_0x01300200,0x0201_0_0x01300200,0x0202_0_0x01300200,0x0202_0_0x01300200,,,,,,,0x0201_0_0x01300200,0x0201_0_0x01300200,0x0202_0_0x01300200,0x0202_0_0x01300200,|无人岛:0x0100_0x1B_0,0x0100_0x1B_0,0x0101_0x1B_0,0x0101_0x1B_0,,0x0100_0x78_0,0x0101_0x78_0,,,,0x0100_0x79_0,0x0100_0x79_0,0x0101_0x79_0,0x0101_0x79_0,,0x0201_0_0x00600050,0x0201_0_0x00600050,0x0202_0_0x00600050,0x0202_0_0x00600050,,0x0100_0x78_0,0x0101_0x78_0,,,,0x0201_0_0x023000B0,0x0201_0_0x023000B0,0x0202_0_0x023000B0,0x0202_0_0x023000B0,,0x0100_0x0D_0,0x0100_0x0D_0,0x0101_0x0D_0,0x0101_0x0D_0,,0x0100_0x78_0,0x0101_0x78_0,,,,0x0201_0_0x02200320,0x0201_0_0x02200320,0x0202_0_0x02200320,0x0202_0_0x02200320,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,")
        Scripts.Add("1920×1080", "个人小屋:0x0100_0x1B_0,0x0100_0x1B_0,0x0101_0x1B_0,0x0101_0x1B_0,,0x0201_0_0x01700280,0x0201_0_0x01700280,0x0202_0_0x01700280,0x0202_0_0x01700280,,0x0100_0x410000_0,,,0x0101_0x410000_0,,0x0201_0_0x01700280,0x0201_0_0x01700280,0x0202_0_0x01700280,0x0202_0_0x01700280,,,,,,,0x0201_0_0x01700280,0x0201_0_0x01700280,0x0202_0_0x01700280,0x0202_0_0x01700280,|无人岛:0x0100_0x1B_0,0x0100_0x1B_0,0x0101_0x1B_0,0x0101_0x1B_0,,0x0100_0x78_0,0x0101_0x78_0,,,,0x0100_0x79_0,0x0100_0x79_0,0x0101_0x79_0,0x0101_0x79_0,,0x0201_0_0x00700060,0x0201_0_0x00700060,0x0202_0_0x00700060,0x0202_0_0x00700060,,0x0100_0x78_0,0x0101_0x78_0,,,,0x0201_0_0x02A000D0,0x0201_0_0x02A000D0,0x0202_0_0x02A000D0,0x0202_0_0x02A000D0,,0x0100_0x0D_0,0x0100_0x0D_0,0x0101_0x0D_0,0x0101_0x0D_0,,0x0100_0x78_0,0x0101_0x78_0,,,,0x0201_0_0x029003C0,0x0201_0_0x029003C0,0x0202_0_0x029003C0,0x0202_0_0x029003C0,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,,0x0100_0x78_0,0x0101_0x78_0,,,,,,,,")
        Dim Sizes = Reader.ReadKeys("Script")
        For i As Integer = 0 To Sizes.Count - 1
            Dim Script = Reader.ReadString("Script", Sizes(i))
            If Scripts.ContainsKey(Sizes(i)) Then
                Scripts(Sizes(i)) = Script
            Else
                Scripts.Add(Sizes(i), Script)
            End If
        Next
        For i As Integer = 0 To Scripts.Count - 1
            AddFunc(Scripts.Keys(i), Scripts.Values(i))
        Next
    End Sub
    Private Sub AddFunc(ByVal Size As String, ByVal Script As String)
        If Not Funcs.ContainsKey(Size) Then
            Dim Scripts As String() = CStr(IIf(Script <> "", "|" & Script, "")).Split("|")
            Dim Dictionary As Dictionary(Of String, List(Of Param)) = New Dictionary(Of String, List(Of Param))
            For j As Integer = 0 To Scripts.Length - 1
                If Scripts(j) = "" Then
                    Scripts(j) = ":"
                End If
                Dim l As Integer = InStr(Scripts(j), ":")
                If l > 0 Then
                    Dim n As String = Mid(Scripts(j), 1, l - 1)
                    Dim s As String() = Mid(Scripts(j), l + 1, Scripts(j).Length - l).Split(",")
                    Dim List As List(Of Param) = New List(Of Param)
                    For k As Integer = 0 To s.Length - 1
                        Dim p As String() = s(k).Split("_")
                        Dim Param1 As Integer = 0
                        If p.Length > 0 Then Param1 = StringToInteger(p(0))
                        Dim Param2 As Integer = 0
                        If p.Length > 1 Then Param2 = StringToInteger(p(1))
                        Dim Param3 As Integer = 0
                        If p.Length > 2 Then Param3 = StringToInteger(p(2))
                        List.Add(New Param(Param1, Param2, Param3))
                    Next
                    Dictionary.Add(n, List)
                End If
            Next
            Funcs.Add(Size, Dictionary)
        End If
    End Sub

    Private Sub Me_Loaded(ByVal sender As Object, ByVal e As System.Windows.RoutedEventArgs) Handles Me.Loaded
        LoadMenu()
        Timer.Start()
    End Sub
    Private Sub LoadMenu()
        Dim hMenu As IntPtr = GetSystemMenu(New WindowInteropHelper(Me).Handle, 0)
        AppendMenu(hMenu, 0, 0, "隐藏(&H)")
        AppendMenu(hMenu, 0, 1, "关于(&A)")
    End Sub
    Private Sub Timer_Tick(ByVal sender As Object, ByVal e As System.EventArgs)
        RefreshFore()
        RefreshInfo()
        DoMissions()
    End Sub
    Private Sub RefreshFore()
        If Origin <> IntPtr.Zero Then
            SetForegroundWindow(Origin)
            Fore = Origin
            Origin = IntPtr.Zero
        Else
            Fore = GetForegroundWindow()
        End If
    End Sub
    Private Sub RefreshInfo()
        Dim Hwnds As List(Of IntPtr) = New List(Of IntPtr)
        Dim Hwnd As IntPtr = IntPtr.Zero
        For i As Integer = 0 To Classes.Length - 1
            For j As Integer = 0 To Titles.Length - 1
                Do
                    Hwnd = FindWindowEx(IntPtr.Zero, Hwnd, Classes(i), Titles(j))
                    If Hwnd <> IntPtr.Zero Then
                        Hwnds.Add(Hwnd)
                    Else
                        Exit Do
                    End If
                Loop
            Next
        Next
        Dim IsChanged As Boolean = False
        Dim r As Integer = 0
        For i As Integer = 0 To UBound(Infos)
            If Not Hwnds.Contains(Infos(i - r).Handle) Then
                RemoveList(Infos(i - r).Handle)
                r += 1
                IsChanged = True
            End If
        Next
        For i As Integer = 0 To Hwnds.Count - 1
            If Not InList(Infos, Hwnds(i)) Then
                AddList(Hwnds(i))
                IsChanged = True
            End If
        Next
        For i As Integer = 0 To UBound(Infos)
            Dim Rect As Rects
            GetClientRect(Infos(i).Handle, Rect)
            Infos(i).Rect = New Rects(Rect.Left, Rect.Top, Rect.Right, Rect.Bottom)
            Infos(i).Size = (Infos(i).Rect.Right - Infos(i).Rect.Left) & "×" & (Infos(i).Rect.Bottom - Infos(i).Rect.Top)
            Infos(i).Active = (Fore = Infos(i).Handle)
            Infos(i).Hide = (IsWindowVisible(Infos(i).Handle) = 0)
        Next
        For i As Integer = 0 To StackPanel.Children.Count - 1
            If Not Funcs.ContainsKey(Infos(i).Size) Then
                AddFunc(Infos(i).Size, "")
            End If
            If Not Infos(i).Mode < Funcs(Infos(i).Size).Count Then
                Infos(i).Mode = 0
                Infos(i).Tick = 0
            End If
            Dim TextBlock As TextBlock = CType(StackPanel.Children(i), TextBlock)
            TextBlock.Text = "窗体" & i & " - " & IntegerToHex(Infos(i).Handle) & " - " & Infos(i).Size & " - " & GetStatus(Infos(i)) & IIf(Funcs(Infos(i).Size).Keys(Infos(i).Mode) <> "", " - " & Funcs(Infos(i).Size).Keys(Infos(i).Mode) & " " & Infos(i).Tick & "/" & Funcs(Infos(i).Size).Values(Infos(i).Mode).Count, "")
            TextBlock.Tag = i
            Dim ToolTip As ToolTip = CType(TextBlock.ToolTip, ToolTip)
            ToolTip.Width = CType(IIf(Me.IsAero, ((Infos(i).Rect.Right - Infos(i).Rect.Left) / 4), 0), Double)
            ToolTip.Height = CType(IIf(Me.IsAero, ((Infos(i).Rect.Bottom - Infos(i).Rect.Top) / 4), 0), Double)
            ToolTip.Tag = i
        Next
        If IsChanged Then
            Dim Height As Double = 0
            For i As Integer = 0 To StackPanel.Children.Count - 1
                Dim TextBlock As TextBlock = CType(StackPanel.Children(i), TextBlock)
                Height += TextBlock.Height + TextBlock.Margin.Top + TextBlock.Margin.Bottom
            Next
            Dim Position = GetClientToWindow(New WindowInteropHelper(Me).Handle)
            Me.Height = Position.Y + Height
        End If
    End Sub
    Private Function InList(ByVal Infos As Info(), ByVal Hwnd As IntPtr) As Boolean
        For Each i As Info In Infos
            If i.Handle = Hwnd Then
                Return True
            End If
        Next
        Return False
    End Function
    Private Sub AddList(ByVal Hwnd As IntPtr)
        ReDim Preserve Infos(0 To (UBound(Infos) + 1))
        Infos(UBound(Infos)).Handle = Hwnd
        Dim TextBlock As TextBlock = New TextBlock
        TextBlock.FontFamily = New FontFamily("SimSun")
        TextBlock.FontSize = 14
        TextBlock.Margin = New Thickness(3)
        TextBlock.UseLayoutRounding = True
        TextBlock.Height = 16
        TextBlock.Effect = GetGlowEffect(TextBlock.FontSize)
        Dim ToolTip As ToolTip = New ToolTip()
        ToolTip.HasDropShadow = False
        AddHandler ToolTip.Opened, AddressOf ToolTip_Opened
        AddHandler ToolTip.Closed, AddressOf ToolTip_Closed
        TextBlock.ToolTip = ToolTip
        AddHandler TextBlock.MouseUp, AddressOf TextBlock_MouseUp
        AddHandler TextBlock.PreviewMouseDown, AddressOf TextBlock_PreviewMouseDown
        StackPanel.Children.Add(TextBlock)
    End Sub
    Private Sub RemoveList(ByVal Hwnd As IntPtr)
        For i As Integer = 0 To UBound(Infos)
            If Infos(i).Handle = Hwnd Then
                For j As Integer = i To UBound(Infos) - 1
                    Infos(j) = Infos(j + 1)
                Next
                Dim TextBlock As TextBlock = CType(StackPanel.Children(StackPanel.Children.Count - 1), TextBlock)
                RemoveHandler TextBlock.MouseUp, AddressOf TextBlock_MouseUp
                RemoveHandler TextBlock.PreviewMouseDown, AddressOf TextBlock_PreviewMouseDown
                Dim ToolTip As ToolTip = CType(TextBlock.ToolTip, ToolTip)
                RemoveHandler ToolTip.Opened, AddressOf ToolTip_Opened
                RemoveHandler ToolTip.Closed, AddressOf ToolTip_Closed
                ToolTip = Nothing
                StackPanel.Children.Remove(TextBlock)
                TextBlock = Nothing
                ReDim Preserve Infos(0 To (UBound(Infos) - 1))
                Exit For
            End If
        Next
    End Sub
    Private Sub DoMissions()
        For i As Integer = 0 To UBound(Infos)
            Dim p1 As Integer = Funcs(Infos(i).Size).Values(Infos(i).Mode)(Infos(i).Tick).Param1
            Dim p2 As Integer = Funcs(Infos(i).Size).Values(Infos(i).Mode)(Infos(i).Tick).Param2
            Dim p3 As Integer = Funcs(Infos(i).Size).Values(Infos(i).Mode)(Infos(i).Tick).Param3
            If (p1 = WindowsMessage.WM_KeyDown OrElse p1 = WindowsMessage.WM_KeyUp) AndAlso p2 >= &H10000 Then
                p2 = p2 / &H10000
                If Infos(i).Handle <> Fore Then
                    SetForegroundWindow(Infos(i).Handle)
                    Origin = Fore
                End If
                keybd_event(p2, 0, CInt(IIf(p1 = WindowsMessage.WM_KeyDown, KEYEVENTF_KEYDOWN, KEYEVENTF_KEYUP)), 0)
            ElseIf p1 > 0 Then
                PostMessage(Infos(i).Handle, p1, p2, p3)
            End If
            Infos(i).Tick = CInt(IIf(Infos(i).Tick < Funcs(Infos(i).Size).Values(Infos(i).Mode).Count - 1, Infos(i).Tick + 1, 0))
        Next
    End Sub

    Private Sub TextBlock_MouseUp(ByVal sender As Object, ByVal e As System.Windows.Input.MouseButtonEventArgs)
        Dim i = CInt(CType(sender, TextBlock).Tag)
        Select Case e.ChangedButton
            Case MouseButton.Right, MouseButton.XButton1
                Infos(i).Mode = CInt(IIf(Infos(i).Mode < Funcs(Infos(i).Size).Count - 1, Infos(i).Mode + 1, 0))
                Infos(i).Tick = 0
            Case MouseButton.Left, MouseButton.XButton2
                Infos(i).Mode = CInt(IIf(Infos(i).Mode > 0, Infos(i).Mode - 1, Funcs(Infos(i).Size).Count - 1))
                Infos(i).Tick = 0
            Case MouseButton.Middle
                If Infos(i).Hide Then
                    SetWindowShow(Infos(i).Handle)
                Else
                    SetWindowHide(Infos(i).Handle)
                End If
        End Select
    End Sub
    Private Sub TextBlock_PreviewMouseDown(ByVal sender As Object, ByVal e As System.Windows.Input.MouseButtonEventArgs)
        If e.ClickCount = 3 Then
            Dim i = CInt(CType(sender, TextBlock).Tag)
            SetWindowKill(Infos(i).Handle)
        End If
    End Sub
    Private Sub ToolTip_Opened(ByVal sender As Object, ByVal e As System.Windows.RoutedEventArgs)
        Dim ToolTip As ToolTip = CType(sender, ToolTip)
        Dim i = CInt(ToolTip.Tag)
        If Infos(i).Thumbnail = IntPtr.Zero Then
            Dim PresentationSource As PresentationSource = PresentationSource.FromVisual(ToolTip)
            If Not PresentationSource Is Nothing Then
                Try
                    DwmRegisterThumbnail(CType(PresentationSource, HwndSource).Handle, Infos(i).Handle, Infos(i).Thumbnail)
                    Dim Position = GetClientToWindow(Infos(i).Handle)
                    DwmUpdateThumbnailProperties(Infos(i).Thumbnail, New DwmThumbnailProperties(DwmThumbnailPropertie.DWM_TNP_RectDestination + DwmThumbnailPropertie.DWM_TNP_RectSource + DwmThumbnailPropertie.DWM_TNP_Opacity + DwmThumbnailPropertie.DWM_TNP_Visible + DwmThumbnailPropertie.DWM_TNP_SourceClientAreaOnly, New Rects(0, 0, ToolTip.Width, ToolTip.Height), New Rects(Position.X, Position.Y, Position.X + (Infos(i).Rect.Right - Infos(i).Rect.Left), Position.Y + Infos(i).Rect.Bottom - Infos(i).Rect.Top), 255, True, False))
                Catch ex As Exception
                End Try
            End If
        End If
    End Sub
    Private Sub ToolTip_Closed(ByVal sender As Object, ByVal e As System.Windows.RoutedEventArgs)
        Dim ToolTip As ToolTip = CType(sender, ToolTip)
        Dim i = CInt(ToolTip.Tag)
        If Infos(i).Thumbnail <> IntPtr.Zero Then
            Try
                DwmUnregisterThumbnail(Infos(i).Thumbnail)
                Infos(i).Thumbnail = IntPtr.Zero
            Catch ex As Exception
            End Try
        End If
    End Sub

    Private Sub Me_SourceInitialized(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.SourceInitialized
        HwndSource.FromHwnd(New WindowInteropHelper(Me).Handle).AddHook(New HwndSourceHook(AddressOf WndProc))
    End Sub
    Private Function WndProc(ByVal Hwnd As IntPtr, ByVal Msg As Integer, ByVal WParam As Integer, ByVal LParam As Integer, ByRef Handled As Boolean) As IntPtr
        Select Case Msg
            Case WindowsMessage.WM_SysCommand
                Select Case WParam
                    Case 0
                        SetWindowHide(New WindowInteropHelper(Me).Handle)
                    Case 1
                        Dim Dialog As AeroWindow = New AeroWindow
                        Dialog.Owner = Me
                        Dialog.Width = 400
                        Dialog.Height = 240
                        Dialog.Title = Me.Title + "关于"
                        Dialog.Icon = Me.Icon
                        Dialog.ResizeMode = Windows.ResizeMode.NoResize
                        Dialog.WindowStartupLocation = WindowStartupLocation.CenterScreen
                        Dim Info As TextBlock = New TextBlock
                        Info.FontFamily = New FontFamily("SimSun")
                        Info.FontSize = 13
                        Info.UseLayoutRounding = True
                        Info.Effect = GetGlowEffect(Info.FontSize)
                        Info.Text = "运行本工具后，会自行监测游戏窗体，支持多个窗体各自实现功能。" & vbCrLf & "　　所实现的功能可从ampedH.ini中重定义。" & vbCrLf & vbCrLf & "隐藏本工具后，再次运行exe后可重新显示。" & vbCrLf & vbCrLf & "窗体信息列表中" & vbCrLf & "　　鼠标右键、扩展键1单击：顺序切换功能" & vbCrLf & "　　鼠标左键、扩展键2单击：逆序切换功能" & vbCrLf & "　　鼠标中键单击：隐藏/显示窗体" & vbCrLf & "　　上述按键三击：强制关闭窗体。" & vbCrLf & vbCrLf & "★系统开启Aero效果后将支持" & vbCrLf & "　　窗体毛玻璃界面" & vbCrLf & "　　鼠标悬浮于窗体信息上时显示相应窗体实时预览。"
                        Dialog.Content = Info
                        Dialog.ShowDialog()
                End Select
        End Select
    End Function

End Class