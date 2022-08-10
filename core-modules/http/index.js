const http = require("http");

const host = "http://localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  res.write("Oi http");
  res.end();
});

server.listen(port, () => {
  console.log(`Servidor rodando em ${host}:${port}`);
});
