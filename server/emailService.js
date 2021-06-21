const router = require("express").Router();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// sgMail.setApiKey(
//   "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"
// );
// sgMail.setApiKey(
//   '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'
// );

// read all
router.post("/sent", (req, res) => {
  console.log("req.body.email", req.body.email);
  const key = sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  //   const mailOptions = {
  //     from: "predragstosic1985@gmail.com",
  //     to: req.body.email,
  //     subject: "Thank you",
  //     text:
  //       "Zdravo/Hello,\n\n" +
  //       "Molimo vas verifikujte svoj nalog, klikom na link\n\nPlease verify your account by clicking the link. \n\n" +
  //       "\nhttp://" +
  //       req.headers.host +
  //       "/confirmation/" +
  //       "\n\nDMS - Dental Management System",
  //   };

  const msg = {
    to: "berkutsp@gmail.com",
    from: "predragstosic1985@gmail.com",
    subject: "Sending with Twilio SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sgMail.send(msg).then(
    () => {
      console.log("Email sent");
      return res.status(200).send({ msg: "Email sent" });
    },
    (error) => {
      console.error("err 1", error);

      if (error.response) {
        console.error("err 2", error.response.body);
      }
    }
  );
});

module.exports = router;
