const http = require("http");

const PORT = process.env.PORT || 80; // use 3000 if no env var is set

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("hi my name is prem IamfromTamilnadu\n");
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});

