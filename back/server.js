import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
dotenv.config();
const app = express();
const PORT = process.env.PORT ||4000

app.get("/",(req,res) =>{
    res.send("server is up");
})
app.use("/api/auth",authRoutes);

app.listen (PORT, ()=> console.log("Server running on " + PORT));