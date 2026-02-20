#!/usr/bin/env pwsh
# run-local.ps1 - start a local static HTTP server and open the default browser
# Usage: powershell -ExecutionPolicy Bypass -File .\run-local.ps1

$ErrorActionPreference = 'Stop'
$port = 8000
$root = Split-Path -Path $MyInvocation.MyCommand.Definition -Parent
Set-Location $root

Write-Host "Serving: $root" -ForegroundColor Green

# Stop process currently bound to the port, if any.
$existingPid = (Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue | Select-Object -First 1 -ExpandProperty OwningProcess)
if ($existingPid) {
  try {
    Stop-Process -Id $existingPid -Force -ErrorAction Stop
    Write-Host "Stopped existing server on port $port (PID $existingPid)." -ForegroundColor Yellow
    Start-Sleep -Milliseconds 400
  } catch {
    Write-Warning "Could not stop existing PID ${existingPid}: $($_.Exception.Message)"
  }
}

# Prefer the real Python executable if available.
$pythonCmd = (Get-Command python -ErrorAction SilentlyContinue)
if (-not $pythonCmd) {
  throw "Python is not installed or not on PATH."
}

$proc = Start-Process -FilePath $pythonCmd.Source -ArgumentList "-m", "http.server", "$port" -PassThru
Start-Sleep -Seconds 1

if ($proc.HasExited) {
  throw "Server process exited immediately."
}

Start-Process "http://localhost:$port"
Write-Host "Server running at http://localhost:$port (PID $($proc.Id))" -ForegroundColor Green

