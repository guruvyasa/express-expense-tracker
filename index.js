import express from "express"
import {addExpense, getExpenses} from "./database.js"
// const req = require("express/lib/request")
const app = express()
app.set("view engine","ejs")
app.use(express.urlencoded({extended: true}));

app.get("/",async (req, res)=>{
        let expenses = await getExpenses()
        console.log(expenses)
        res.render("index",{expenses})
    })
    .post("/",async (req,res)=>{

        await addExpense(req.body)
        res.redirect("/")
        // res.render("index",{expenses:getExpenses()})

    })
   
        // res.send("")

app.listen(5000, ()=>{
    console.log("app  started! port 5000")
})