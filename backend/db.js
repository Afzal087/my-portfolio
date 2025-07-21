import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const ConnectDB = async () => {
    try {
        const Connection = await mongoose.connect(process.env.MONGO_URI, {
                
            });
        console.log("MongoDB Connected");
    }
    catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

export default ConnectDB;