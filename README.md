# Reddit Scroller

A modern, visual Reddit browser that displays posts as tiles in an endless-scrolling feed. Modeled after Scrolldit.

## Features

- **Visual Tile Layout** - Browse Reddit posts as image tiles in a dense, fast grid
- **Endless Scrolling** - Automatic load-more as you scroll
- **Multiple Subreddits** - Switch between any subreddit with the input field
- **Sort Options** - Hot, New, Top, Rising
- **NSFW Toggle** - Optional NSFW content (disabled by default)
- **Fullscreen Lightbox** - Click any image to view in full-screen with keyboard navigation
- **Dark/Light Theme** - Automatic system preference detection with manual toggle
- **Shareable URLs** - Hash-based URL state for easy sharing

## Quick Start

### Method 1: Using the Proxy Server (Recommended - Works without CORS issues)

```bash
# Install Node.js if you don't have it
node proxy-server.js
```

Then open `http://localhost:3000` in your browser.

### Method 2: CORS Extension (Quick testing)

Install [CORS Everywhere](https://chrome.google.com/webstore/detail/cors-everywhere/kbkmbpiekjpdkghmdfjelcjeheobdgkk) extension in Chrome/Edge.

### Method 3: Local HTTP Server

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000/reddit-scroller.html`

### Method 4: Direct File (Limited)

If you open `reddit-scroller.html` directly with `file://`, Reddit's CORS policy will block the feed. In this case, you'll see a warning in the app with instructions.

## Usage

1. The app defaults to `/r/all` with NSFW disabled
2. Use the top bar to change subreddits, sort order, or enable NSFW
3. Click any post to view in fullscreen lightbox
4. Use `Arrow Left` / `Arrow Right` to navigate in lightbox
5. Press `Escape` to close lightbox
6. Use `Arrow Up` / `Arrow Down` to scroll the feed
7. Press `N` to open lightbox on the first visible post

## Subreddit Switching

Type a subreddit name (without the `/r/` prefix) and press Enter, or click a post's subreddit link.

Examples: `politics`, `technology`, `pics`, `AskReddit`

## Configuration

The app is configured via JavaScript variables at the top of the `<script>` section:

```javascript
// Proxy configuration (set to null to disable proxy)
// Using a local proxy server is recommended for reliable operation
proxy: 'https://www.corsproxy.com/?',

// Default subreddit
defaultSubreddit: 'all',

// Default sort order: 'hot', 'new', 'top', 'rising'
defaultSort: 'hot',

// Default NSFW setting
defaultNsfw: false,
```

## Technologies

- Pure HTML5, CSS3, Vanilla JavaScript
- No external dependencies or build tools
- Uses Reddit's JSON API (`https://www.reddit.com/r/{subreddit}/{sort}.json`)

## CORS Proxy Setup

Reddit's API blocks direct browser requests due to CORS policies. The `proxy-server.js` file included in this repository provides a simple Node.js server that:

1. Serves the HTML file from this directory
2. Proxies Reddit API requests through the server (bypassing CORS)
3. Returns proper JSON responses with CORS headers enabled

Run with: `node proxy-server.js`

## License

MIT
