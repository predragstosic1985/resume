const router = require("express").Router();
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const db = admin.firestore();

// read all
router.get("/read", (req, res) => {
  (async () => {
    try {
      let comments = [];
      const commentsDB = await db.collection("comments").get();
      if (commentsDB.docs.length > 0) {
        for (const comment of commentsDB.docs) {
          comments.push(comment.data());
        }
      }
      res.json(comments);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// read item
router.get("/read/:id", (req, res) => {
  (async () => {
    try {
      const document = db.collection("comments").doc(req.params.id);
      let item = await document.get();
      let response = item.data();
      return res.status(200).send(response);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// post
router.post("/create", urlencodedParser, async function (req, res) {
  try {
    const commentDB = db.collection("comments");
    await commentDB.add({
      name: req.body.name,
      email: req.body.email,
      comment: req.body.comment,
    });
    res.status(200).json({ message: "done" });
    console.log(req.body);
  } catch (error) {
    console.log("error nesto");
    return res.status(500).send(error);
  }
});

// update
router.put("/update/:id", (req, res) => {
  (async () => {
    try {
      const document = db.collection("comments").doc(req.params.id);
      await document.update({
        item: req.body.item,
      });
      return res.status(200).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// delete
router.delete("/delete/:id", (req, res) => {
  (async () => {
    try {
      const document = db.collection("comments").doc(req.params.id);
      await document.delete();
      return res.status(200).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

module.exports = router;
