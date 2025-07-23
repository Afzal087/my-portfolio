import express from "express";
import UserModel from "../models/UserModel.js";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";





const app = express();

dotenv.config();
app.use(cors());
const PORT = "https://my-portfolio-4l1f.onrender.com";
app.use(express.json());

const router = express.Router();



router.get("/contact", async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);

    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }

});

router.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;
    try {


        const newUser = new UserModel({ name, email, message });
        await newUser.save();
        res.status(200).json({ success: true, user: newUser });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.GPASS
        }

    })

    const mailoptions = {
        from: process.env.EMAIL,
        to: "mdafzal87r@gmail.com",
        subject: `Portfolio Response from ${name} `,
        text: `${message}`
    };
    
    transporter.sendMail(mailoptions, (error, info) => {
        if (error) { console.error("Email error ", error);}
        else {console.log("Email Sent Successfully", info.response);}
    })



});

app.use("/", router);
app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
})

export default router;