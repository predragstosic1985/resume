const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/sent", (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "berkutsp@gmail.com",
      pass: "Sarplaninac0202",
    },
  });

  const mailOptions = {
    from: "berkutsp@gmail.com",
    to: req.body.email,
    subject: "Predrag Stosic",
    html: `<html>
      <head>
        <meta name="viewport" content="width=device-width" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Predrag Stosic</title>
      </head>
      <body >
        <span style="font-family: sans-serif; color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0; ">resume</span>
        <tableborder="0" >
          <tr>
            <td>&nbsp;</td>
            <td style="background: #ffffff; font-family: sans-serif; display: block; margin: 0 auto !important; max-width: 580px; padding: 10px; width: 580px;">
              <div style="background: #ffffff; font-family: sans-serif; box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 10px; ">
                <table  style="background: #ffffff; border-radius: 10px; width: 100%;">
                  <tr>
                    <td style="font-family: sans-serif; box-sizing: border-box; padding: 20px; ">
                      <table>
                        <tr>
                          <td>
                            <p>Zdravo / Hello</p>
                            <p>Hvala Vam na komentaru i izdvojenom vremenu.</p>
                            <p>Thank you for your time and comment.</p>
                            <table>
                              <tbody>
                                <tr>
                                  <td>
                                    <table  >
                                      <tbody>
                                        <tr>
                                          <td> <a style="
                                            background-color: #3498db; 
                                            border-color: #3498db; 
                                            color: #ffffff;  
                                            border: solid 1px #3498db;
                                            border-radius: 5px;
                                            box-sizing: border-box;
                                            cursor: pointer;
                                            display: inline-block;
                                            font-size: 14px;
                                            font-weight: bold;
                                            margin: 0;
                                            padding: 12px 25px;
                                            text-decoration: none;
                                            text-transform: capitalize;  " href="https://github.com/predragstosic1985" target="_blank">Github</a> </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <p>  Zelim Vam lep dan. / Have a nice day.</p>
                            <img src="./Assets/img.stole.jpg" alt="Predrag Stosic" style="border-radius: 50%; width: 150px; height: 150px;"/>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
            <td>&nbsp;</td>
          </tr>
        </table>
      </body>
    </html>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return res.status(500).end();
    } else {
      console.log("Email sent: " + info.response);
      return res.status(200).send({ msg: "Email sent" });
    }
  });
});

module.exports = router;
