const express = require("express");
const app = express();
const path = require("path");

const port = 5000;
const host = "http://localhost";

const projects = require("./Projects");

// ler body
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// arquivos estáticos
app.use(express.static("public"));

app.use("/projects", projects);

app.listen(port, () => {
  console.log(`Server running at ${host}:${port}`);
});