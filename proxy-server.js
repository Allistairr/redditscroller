// Simple CORS proxy server for Reddit Scroller
// Usage: node proxy-server.js
// Then visit: http://localhost:3000/reddit-scroller.html?proxy=true

const http = require('http');
const https = require('https');
const url = require('url');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const HTML_FILE = path.join(__dirname, 'reddit-scroller.html');

// Create proxy server
const proxy = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    
    // Serve the HTML file at root
    if (parsedUrl.pathname === '/' || parsedUrl.pathname === '/reddit-scroller.html') {
        fs.readFile(HTML_FILE, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error reading file');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data);
        });
        return;
    }
    
    // Proxy /api/:subreddit/:sort requests to Reddit
    if (parsedUrl.pathname.startsWith('/api/')) {
        const parts = parsedUrl.pathname.split('/');
        const subreddit = parts[2] || 'all';
        const sort = parts[3] || 'hot';
        
        const redditUrl = `https://www.reddit.com/r/${subreddit}/${sort}.json?raw_json=1`;
        
        https.get(redditUrl, (redditRes) => {
            let data = '';
            redditRes.on('data', chunk => data += chunk);
            redditRes.on('end', () => {
                res.writeHead(200, { 
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                });
                res.end(data);
            });
        }).on('error', (err) => {
            res.writeHead(500);
            res.end(JSON.stringify({ error: err.message }));
        });
        return;
    }
    
    res.writeHead(404);
    res.end('Not found');
});

proxy.listen(PORT, () => {
    console.log(`Reddit Scroller Proxy Server running at http://localhost:${PORT}`);
    console.log(`Open http://localhost:${PORT} in your browser`);
    console.log(`Press Ctrl+C to stop`);
});
