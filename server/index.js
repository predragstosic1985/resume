const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const serviceAccount = require("./permissions.json");
const cors = require("cors");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://resumedb-cbfc1-default-rtdb.europe-west1.firebasedatabase.app",
});
const db = admin.firestore();
const comments = require("./comments");

app.use(express.json());
app.use(cors());
app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Stole!" });
});

app.use("/api/comments", comments);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
