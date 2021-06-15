const router = require("express").Router();
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const db = admin.firestore();
const { v4: uuidv4 } = require("uuid");

// read all
router.get("/read", (req, res) => {
  (async () => {
    try {
      const comments = await db.collection("comments");
      const data = await comments.get();
      const commentsArray = [];
      if (data.empty) {
        res.status(404).send("No comments record found");
      } else {
        data.forEach((doc) => {
          const comment = {
            docID: doc.id,
            name: doc.data().name,
            email: doc.data().email,
            date: doc.data().date,
            comment: doc.data().comment,
            id: doc.data().id,
          };
          commentsArray.push(comment);
        });
        res.send(commentsArray);
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// read one
router.get("/read/:id", (req, res) => {
  (async () => {
    try {
      const id = req.params.id;
      const comment = await db.collection("comments").doc(id);
      const data = await comment.get();
      if (!data.exists) {
        res.status(404).send("Comment with the given ID not found");
      } else {
        const myNewObj = {
          docID: id,
          id: data.data().id,
          name: data.data().name,
          email: data.data().email,
          date: data.data().date,
          comment: data.data().comment,
        };
        res.send(myNewObj);
      }
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
      id: uuidv4(),
      name: req.body.name,
      email: req.body.email,
      comment: req.body.comment,
      date: new Date(),
    });
    res.status(200).json({ message: "done" });
  } catch (error) {
    console.log("error nesto");
    return res.status(500).send(error);
  }
});

// update
router.put("/update/:id", (req, res) => {
  (async () => {
    try {
      const id = req.params.id;
      const data = req.body;
      const comment = await db.collection("comments").doc(id);
      await comment.update(data);
      res.send("Record updated successfuly");
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
