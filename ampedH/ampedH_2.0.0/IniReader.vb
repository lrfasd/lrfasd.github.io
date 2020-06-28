Option Explicit On
Option Strict Off

Public Class IniReader

    Private _Ini As String = ""

    Public Sub New(ByVal Path As String)
        If System.IO.File.Exists(Path) Then
            _Ini = System.IO.File.ReadAllText(Path, Text.Encoding.Unicode).Replace(vbLf, vbCr).Replace(vbCr & vbCr, vbCr).Replace(vbCr, vbCrLf)
        End If
    End Sub

    Private Function ExtractString(ByVal Source As String, ByVal Find1 As String, ByVal Find2 As String, ByRef Start As Integer, Optional ByVal DefaultValue As String = "") As String
        Dim Result As String = DefaultValue
        If Source = "" Then Return Result
        Dim Location1 As Integer = InStr(Start, Source, Find1)
        Dim Location2 As Integer = 0
        If Location1 <> 0 Then
            Location2 = InStr(Location1 + 1, Source, Find2)
            Location1 = InStrRev(Source, Find1, Location2 - 1)
            Result = Mid(Source, Location1 + Find1.Length, CInt(IIf(Location2 <> 0, Location2 - Location1 - Find1.Length, Source.Length - Location1 - Find1.Length + 1)))
        End If
        If Location2 <> 0 Then Start = Location2 + 1
        Return Result
    End Function

    Public Function ReadSections() As List(Of String)
        Dim Result As List(Of String) = New List(Of String)
        Dim p As Integer = 1
        Do
            Dim Section As String = ExtractString(vbCrLf & _Ini, vbCrLf & "[", "]", p)
            If Section <> "" Then
                If InStr(Section, vbCrLf) = 0 Then
                    Result.Add(Section)
                End If
            Else
                Exit Do
            End If
        Loop
        Return Result
    End Function
    Public Function ReadKeys(ByVal Section As String) As List(Of String)
        Dim Result As List(Of String) = New List(Of String)
        Dim Sec = ExtractString(_Ini & vbCrLf & "[", "[" & Section & "]" & vbCrLf, vbCrLf & "[", 1)
        Dim p As Integer = 1
        Do
            Dim Key As String = ExtractString(vbCrLf & Sec, vbCrLf, "=", p)
            If Key <> "" Then
                Result.Add(Key)
            Else
                Exit Do
            End If
        Loop
        Return Result
    End Function

    Public Function ReadString(ByVal Section As String, ByVal Key As String, Optional ByVal DefaultValue As String = "") As String
        Dim Result As String = DefaultValue
        If _Ini = "" Then Return Result
        Dim Sec = ExtractString(_Ini & vbCrLf & "[", "[" & Section & "]" & vbCrLf, vbCrLf & "[", 1)
        Dim Value = ExtractString(Sec & vbCrLf, Key & "=", vbCrLf, 1)
        If Value <> "" Then Result = Value
        Return Result
    End Function
    Public Function ReadInteger(ByVal Section As String, ByVal Key As String, Optional ByVal DefaultValue As Integer = 0) As Integer
        Dim Result As String = DefaultValue
        Dim Value = CInt(ReadString(Section, Key, "0"))
        If Value <> 0 Then Result = Value
        Return Result
    End Function

End Class
