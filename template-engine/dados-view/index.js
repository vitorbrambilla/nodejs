const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  const user = {
    name: "Vitor",
    surname: "Reis",
    age: 18,
  };

  const palavra = "Teste";

  res.render("home", { user: user, palavra });
});

app.listen(3000, () => {
  console.log("Server running");
});
