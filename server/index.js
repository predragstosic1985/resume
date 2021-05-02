const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const hello = require("./hello");

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Stole!" });
});

app.use("/api/hello", hello);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
