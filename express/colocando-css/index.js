const express = require("express");
const app = express();
const port = 3000;
const host = "http://localhost";

const path = require("path");

const users = require("./users");

// ler o body
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// arquivos estáticos
app.use(express.static("public"));

const basePath = path.join(__dirname, "templates");

app.use("/users", users);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`Server running at ${host}:${port}`);
});
