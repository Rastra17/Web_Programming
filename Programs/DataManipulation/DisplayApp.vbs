Set oShell=CreateObject("Wscript.Shell")
Dim strArgs
strArgs="cmd /c Path.bat"
oShell.Run strArgs, 0, false