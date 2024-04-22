const express= require("express");
const dotenv = require("dotenv");
//const authRoutes=require("./routes/auth.routes.js")
dotenv.config();
const app = express();
const PORT = process.env.PORT ||4000

app.get("/",(req,res) =>{
    res.send("server running!!");
})
//app.use("/api/auth",authRoutes);

app.listen (PORT, ()=> console.log("Server running on " + PORT));