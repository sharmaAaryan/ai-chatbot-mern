const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

app.post("/chat", (req, res) => {
  const userMessage = req.body.message;

  res.json({
    reply: "Hello! I received your message: " + userMessage,
  });
});

app.listen(5000, () => {
  console.log("Server started on http://localhost:5000");
});
