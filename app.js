const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello AK 🚀 ECS + Terraform + ECR Working Successfully");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});