const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");

const products = [];

app.use(bodyParser.json());

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  products.push(req.body);
  res.json(products);
});

app.put("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const updateProduct = req.body;
  const index = products.findIndex((p) => p.id === id);
  products[index] = updateProduct;
  res.json(updateProduct);
});

app.delete("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex((p) => p.id === id);
  products.splice(index, 1);
  res.json(products);
});

app.get("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);
  res.json(student);
});

app.listen(port, () => console.log(`Heloo World! ${port}!!`));
