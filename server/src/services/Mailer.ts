import sgMail from "@sendgrid/mail";
import keys from "../config/keys";

interface Survey extends Document {
    recipients?: String[];
    subject?: String;
}

class Mailer {
  constructor(survey: Survey, content: String) {
    sgMail.setApiKey(keys.sendGridKey!);
    //@ts-ignore
    this.msg = {
      to: survey.recipients!.map((email) => email),
      from: "office@danielharel.co.il",
      subject: survey.subject,
      html: content,
      trackingSettings: { enable_text: true, enabled: true }
    };
  }
 
  async send() {
    //@ts-ignore
    const response = await sgMail.send(this.msg);
    return response;
  }
}

// class Mailer {
//   constructor({ subject, recipients }, content: String) {
//     sgMail.setApiKey(keys.sendGridKey!);
//     this.msg = {
//       to: recipients.map(({ email }) => email),
//       from: "office@danielharel.co.il",
//       subject: subject,
//       html: content,
//       trackingSettings: { enable_text: true, enabled: true }
//     };
//   }
 
//   async send() {
//     const response = await sgMail.send(this.msg);
//     return response;
//   }
// }



export default Mailer;