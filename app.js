const express = require('express');
const app = express();
require("./db/conn");
const model = require("./db/models/m")

const port = process.env.PORT || 3000;


// app.get("/", (req,res)=>{
//     res.send("hello from the other side")
// });

app.post("/model", (req,res)=>{
    res.send("hello from the other side")
});

app.listen(port,() => {
    console.log(`connection is setup ${port}`)
})