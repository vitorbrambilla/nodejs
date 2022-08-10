const express = require("express");
const app = express();
const port = 3000;
const host = "http://localhost";

const path = require("path");

const basePath = path.join(__dirname, "templates");

app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  // leitura da tabela users, resgatar um usuário
  console.log(`Estamos buscando pelo usuário: ${id}`);

  res.sendFile(`${basePath}/users.html`);
});

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`Server running at ${host}:${port}`);
});
