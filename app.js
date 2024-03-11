import express from "express";

const app = express()
const PORT = 8080

app.get("/", (req,res)=>res.send("Index Page"))
app.listen(PORT, ()=>console.log(`Application running on ${PORT}`))