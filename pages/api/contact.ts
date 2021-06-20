import type { NextApiRequest, NextApiResponse } from "next";

import formidable from "formidable";
import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY);

// THIS IS IMPORTANT FOR FORMIDABLE
// turn off next bodyparser https://nextjs.org/docs/api-routes/api-middlewares#custom-config
export const config = {
  api: {
    bodyParser: false,
  },
};

const formatEmail = (
  from: { name: string; email: string },
  message: { subject: string; content: string }
) => {
  return {
    raw: `From: "${from.name}" ${from.email}
Message Subject: "${message.subject}"
Message: "${message.content}"`,
    html: `<strong>From:</strong> "${from.name}" <i>${from.email}</i>
<br />
<strong>Message Subject:</strong> "${message.subject}"
<br />
<strong>Message:</strong> "${message.content}"`,
  };
};

const FROM_EMAIL = process.env.FROM_EMAIL ?? "noah.bresler@newmillenia.us";
const TO_EMAIL = process.env.TO_EMAIL ?? "vishnu.sriram@newmillenia.us";

export default async function ContactFunction(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const contentType = req.headers["content-type"];

    if (contentType && contentType.indexOf("multipart/form-data") !== -1) {
      try {
        const formParse: any = await new Promise((resolve, reject) => {
          formidable().parse(req, (err, fields) => {
            if (err) {
              reject(err);
            } else {
              resolve(fields);
            }
          });
        });

        if (!(formParse.name && formParse.name.length > 0)) {
          res
            .status(400)
            .end("Form field 'name' must be included and not empty");
        } else if (!(formParse.message && formParse.message.length > 0)) {
          res
            .status(400)
            .end("Form field 'message' must be included and not empty");
        } else {
          const mailBody = formatEmail(
            {
              name: formParse?.name ?? "No Name Specified",
              email: formParse?.email ?? "No Email Specified",
            },
            {
              subject: formParse?.subject ?? "No Subject Specified",
              content: formParse?.message ?? "No Message Specified",
            }
          );

          mail
            .send({
              to: FROM_EMAIL,
              from: TO_EMAIL,
              subject: `Contact Form: ${
                formParse?.subject ?? "No Subject Specified"
              }`,
              text: mailBody.raw,
              html: mailBody.html,
            })
            .then(() => {
              // If the form was sent via js we just return a status code 200
              // Otherwise, we redirect to the contact page
              if (formParse.viaJs) {
                res.status(200).end();
              } else {
                res
                  .writeHead(302, {
                    Location: "/contact",
                  })
                  .end();
              }
            })
            .catch((err) => {
              res.status(err.code || 400).end(String(err.response.body.errors));
              console.log(err.response.body.errors);
            });
        }
      } catch (err) {
        res.status(err.httpCode || 400).end(String(err));
      }
    } else {
      res
        .status(400)
        .end("Request must have content-type of mutlipart/form-data");
    }
  } else {
    res.status(403).end(`${req.method} method not supported on this route`);
  }
}
