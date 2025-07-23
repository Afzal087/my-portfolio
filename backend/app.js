import express from "express";
import connectDB from "./db.js";
import contactRoutes from "./routes/contact.js";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB(); // connect to MongoDB


app.use("/contact", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
