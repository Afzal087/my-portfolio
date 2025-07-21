import express from "express";
import UserModel from "../models/UserModel.js";
import cors from "cors";

const app = express();
const PORT = 5000; 

app.use(cors());
app.use(express.json());

const router = express.Router();

router.get("/contact",async (req,res)=>{
    try{
        const users = await UserModel.find();
       res.status(200).json(users);

    }catch(err){
        res.status(500).json({success : false , message : err.message});
    }

});

router.post("/contact" ,async (req,res)=>{
    try {
        const {name , email , message} = req.body;
        const newUser = new UserModel({ name, email, message });
        await newUser.save();
        res.status(200).json({ success: true, user: newUser });

    }catch(err){
        res.status(500).json({success : false , message : err.message});
    }
  
}); 

app.use("/", router);
app.listen(PORT, ()=>{
    console.log(`Server running on Port ${PORT}`);
})

export default router;