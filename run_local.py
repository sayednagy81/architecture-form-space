"""
Local development server for Architecture: Form, Space & Order Interactive Hub
Serves static files with proper MIME types for SWF and WebAssembly, and auto-opens your browser.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080

class ArchHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS and disable caching during development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def guess_type(self, path):
        if path.endswith('.swf'):
            return 'application/x-shockwave-flash'
        if path.endswith('.wasm'):
            return 'application/wasm'
        return super().guess_type(path)

def main():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    handler = ArchHTTPRequestHandler

    # Try ports starting at 8080
    port = PORT
    httpd = None
    for attempt in range(5):
        try:
            httpd = socketserver.TCPServer(("", port), handler)
            break
        except OSError:
            port += 1

    if not httpd:
        print(f"Error: Could not bind to port {port}")
        sys.exit(1)

    url = f"http://localhost:{port}/index.html"
    print("=" * 65)
    print("🏛️  منصة العمارة: الشكل والفضاء والنظام - فرانسيس شينغ")
    print("    Architecture: Form, Space & Order — Ching Interactive Hub")
    print("=" * 65)
    print(f"🚀 Server is running at: {url}")
    print("💻 Press Ctrl+C in this terminal to stop the server.")
    print("=" * 65)

    try:
        webbrowser.open(url)
    except Exception:
        pass

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server. Goodbye!")
        httpd.server_close()

if __name__ == '__main__':
    main()
