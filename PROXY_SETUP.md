# Proxy Server Setup

If you want to run a local proxy server that works with Reddit's API, use this simple Node.js server:

## Installation

1. Make sure you have Node.js installed
2. Run this command in the project directory:
```bash
node proxy-server.js
```

## Usage

1. Start the proxy server with `node proxy-server.js`
2. Open `http://localhost:3000` in your browser
3. The app will work with full Reddit integration

## How It Works

The proxy server:
- Serves the `reddit-scroller.html` file from this directory
- Proxies Reddit API requests through the server (bypassing CORS)
- Returns proper JSON responses with CORS headers enabled

## Custom Port

To use a different port, set the PORT environment variable:
```bash
PORT=8080 node proxy-server.js
```

Then visit `http://localhost:8080`
