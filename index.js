const express = require("express")
// const req = require("express/lib/request")
const app = express()

app.get("/",(req, res)=>{
    res.send("hello world")
})

app.listen(5000, ()=>{
    console.log("app  started! port 5000")
})