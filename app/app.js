const http = require("http");

const PORT = 80; // run directly on port 80

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Node App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f4f4f9;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          h1 {
            font-size: 30px;
            color: #4f5759;
          }
        </style>
      </head>
      <body>
        <h1>Hi My name is Prem,I am from Tamil Nadu</h1>
      </body>
    </html>
  `);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});

