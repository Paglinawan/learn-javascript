import * as http from "http";

const server = http.createServer(function (req, res) {
  console.log(req.url);
  res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  res.end(`
  <!DOCTYPE html>
  <html lang="ja">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Home</title>
    </head>
    <body>
      <h1>こんにちは！</h1>
    </body>
  </html>
  `);
});

server.listen(8080);
