# 226W1A0438
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>URL Shortener</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin-top: 50px;
      background-color: #f9f9f9;
    }

    h1 {
      color: #333;
    }

    input[type="text"] {
      width: 300px;
      padding: 10px;
      font-size: 16px;
    }

    button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      margin-left: 10px;
      background-color: #007BFF;
      color: white;
      border: none;
      border-radius: 4px;
    }

    button:hover {
      background-color: #0056b3;
    }

    #short-url, #analytics {
      margin-top: 20px;
      font-size: 18px;
      color: #444;
    }

    a {
      color: #007BFF;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>

  <h1>URL Shortener</h1>
  <input id="original-url" type="text" placeholder="Enter original URL" />
  <button id="shorten-btn">Shorten URL</button>

  <div id="short-url"></div>
  <div id="analytics"></div>

  <script>
    // In-memory storage for demo
    const urls = {};
    const analytics = {};

    document.getElementById('shorten-btn').addEventListener('click', shortenURL);

    function shortenURL() {
      const originalUrl = document.getElementById('original-url').value.trim();
      if (!originalUrl) {
        document.getElementById('short-url').innerText = "❌ Please enter a valid URL.";
        document.getElementById('analytics').innerText = "";
        return;
      }

      const shortCode = generateShortCode();
      urls[shortCode] = originalUrl;
      analytics[shortCode] = { clicks: 0 };

      displayShortUrl(shortCode);
    }

    function generateShortCode() {
      return Math.random().toString(36).substring(2, 8); // 6-char short code
    }

    function displayShortUrl(code) {
      const base = window.location.href.split('?')[0];
      const fullShortUrl = `${base}?${code}`;
      document.getElementById('short-url').innerHTML =
        ` Short URL: <a href="${fullShortUrl}">${fullShortUrl}</a>`;
      displayAnalytics(code);
    }

    function displayAnalytics(code) {
      const count = analytics[code]?.clicks || 0;
      document.getElementById('analytics').innerText = `📊 Clicks: ${count}`;
    }

  // Simulate click tracking
    window.addEventListener('load', () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.toString();

      if (code && urls[code]) {
        analytics[code].clicks++;
        window.location.href = urls[code];
      }
    });
  </script>

</body>
</html>



