// Simple in-memory storage for demo purposes
let urls = {};
let analytics = {};

document.getElementById('shorten-btn').addEventListener('click', shortenURL);

function shortenURL() {
    const originalUrl = document.getElementById('original-url').value;
    const shortUrl = generateShortUrl();
    urls[shortUrl] = originalUrl;
    analytics[shortUrl] = { clicks: 0 };
    displayShortUrl(shortUrl);
}

function generateShortUrl() {
    return Math.random().toString(36).substr(2, 6); // Generate a random 6-character string
}

function displayShortUrl(shortUrl) {
    const shortUrlElement = document.getElementById('short-url');
    shortUrlElement.innerText = Short URL:{window.location.href}{shortUrl};
    displayAnalytics(shortUrl);
}

function displayAnalytics(shortUrl) {
    const analyticsElement = document.getElementById('analytics');
    analyticsElement.innerText = Clicks: {analytics[shortUrl].clicks};
}

// Simulate handling short URL clicks for demo
const urlParams = new URLSearchParams(window.location.search);
const shortUrl = urlParams.toString();
if (shortUrl && urls[shortUrl]) {
    analytics[shortUrl].clicks++;
    window.location.href = urls[shortUrl];
}
