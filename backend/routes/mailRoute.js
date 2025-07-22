import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
app.use(cors());
app.use(express.json());

const router = express.Router();

router.post("/contact", async (req, res) => {
  const { GPASS, MAIL } = process.env;
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: MAIL,
      pass: GPASS,
    },
  });

  const mailOptions = {
    from: MAIL,
    to: "mdafzal87r@gmail.com", // Your receiving email
    subject: `Contact form message from ${name}`,
    text: `Sender: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
