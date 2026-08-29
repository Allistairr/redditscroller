# Reddit Scroller

A modern, visual Reddit browser that displays posts as tiles in an endless-scrolling feed.

## Features

- **Visual Tile Layout** - Browse Reddit posts as image tiles in a masonry grid
- **Endless Scrolling** - Infinite scroll through posts as you reach the bottom
- **Lightbox Viewer** - Click images to view in a full-screen lightbox
- **Theme Toggle** - Switch between light and dark themes
- **Hash-based URLs** - Share URLs with state (subreddit, sort, NSFW toggle, columns)
- **Keyboard Navigation** - Fully accessible with keyboard shortcuts
- **Mobile Friendly** - Responsive design works on all devices
- **No CORS Issues** - Uses Reddit API which allows cross-origin requests
- **Configurable Columns** - Choose 2-5 columns for the grid layout

## Quick Start

Simply open `index.html` in your browser. No setup required!

### Options

- **Default feed**: Shows latest Reddit posts
- **Sort options**: Hot, New, Top, Rising
- **Subreddit navigation**: Type any subreddit and press Enter
- **Columns**: Select 2-5 columns from the dropdown

## Operation Modes

### 1. Direct Browser (No Setup)
1. Open `index.html` directly in your browser
2. The app works immediately with no CORS issues

### 2. Local HTTP Server (Recommended for development)
```bash
# Python 3
python -m http.server 8000

# Or using npx
npx serve .
```
Then visit: `http://localhost:8000`

## Keyboard Shortcuts

- `J` / `K` - Navigate up/down between posts
- `Enter` - Open selected post in lightbox
- `O` - Open post URL in new tab
- `S` - Toggle NSFW content
- `T` - Toggle theme (light/dark)
- `G` then `H` - Go to Home feed
- `G` then `N` - Go to New feed
- `G` then `T` - Go to Top feed

## Gallery

The app displays media from Reddit posts:

- **Images** - JPG, PNG, GIF, WebP
- **GIFs** - Animated GIFs
- **Gallery images** - First image from post galleries

## Error Handling

### "Failed to load feed"
- Check your internet connection
- Reddit API may be temporarily unavailable

### "Resource not found"
- The requested subreddit or post may not exist

### "No visual posts found"
- The subreddit may only contain text-only posts (no images)

## How It Works

This app uses the [Reddit API](https://www.reddit.com/dev/api/) which:
- Allows cross-origin requests (no CORS issues)
- Provides free access to Reddit data
- Returns JSON responses

## Building for Production

1. Clone or download this repository
2. The `index.html` file is ready to deploy
3. No build step required - it's a single static file

## Deployment

### GitHub Pages
1. Push `index.html` to your GitHub repository
2. Enable GitHub Pages in repository settings
3. Your app will be live at `https://username.github.io/repo/`

### Netlify / Vercel
1. Drag and drop the `index.html` file to deploy
2. Or connect your repository for automatic deployments

## License

MIT
