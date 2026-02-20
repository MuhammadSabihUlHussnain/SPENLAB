Local deployment (quick preview)
================================

This repository is a static website. To run a local preview:

- Option A (PowerShell script):

  In PowerShell run:

  ```powershell
  powershell -ExecutionPolicy Bypass -File .\run-local.ps1
  ```

  This will start a local HTTP server on port `8000` and open `http://localhost:8000` in your default browser.

- Option B (manual):

  From the project root run:

  ```powershell
  python -m http.server 8000
  ```

  Then open `http://localhost:8000` in your browser.

Stopping the server:

- If you started the server in a terminal, press `Ctrl+C` in that terminal to stop it.
- If started via the PowerShell script a separate Python process will run; close it via Task Manager or locate the process and stop it.
