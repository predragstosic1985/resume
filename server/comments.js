const router = require("express").Router();
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const db = admin.firestore();

// read all
router.get("/read", (req, res) => {
  (async () => {
    try {
      let query = db.collection("comments");
      let response = [];
      await query.get().then((querySnapshot) => {
        let docs = querySnapshot.docs;
        for (let doc of docs) {
          const selectedItem = {
            id: doc.id,
            item: doc.data().item,
          };
          response.push(selectedItem);
        }
      });
      return res.status(200).send(response);
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
  } catch (error) {
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
