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

## Usage

1. Open `reddit-scroller.html` in a web browser
2. The app defaults to `/r/all` with NSFW disabled
3. Use the top bar to change subreddits, sort order, or enable NSFW
4. Click any post to view in fullscreen lightbox
5. Use `Arrow Left` / `Arrow Right` to navigate in lightbox
6. Press `Escape` to close lightbox

## CORS / Feed Access

**Important:** Reddit's API blocks direct browser requests due to CORS policies. To use this app, you have a few options:

### Option 1: Use a CORS Extension (Easiest for testing)
Install a CORS extension like [CORS Everywhere](https://chrome.google.com/webstore/detail/cors-everywhere/kbkmbpiekjpdkghmdfjelcjeheobdgkk) in your browser.

### Option 2: Run a Local Server
```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000/reddit-scroller.html`

### Option 3: Use a Proxy Server
Configure a proxy in the app's JavaScript (lines 825-827):
```javascript
proxy: 'https://your-proxy-server.com/?url=',
```

## Configuration

The app is configured via JavaScript variables in the `<script>` section:

```javascript
// Proxy configuration (set to null to disable proxy)
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

## License

MIT
