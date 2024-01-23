const mongoose =  require('mongoose')
const express = require('express')
const app = express()
const port = 8080
mongoose.connect('mongodb://127.0.0.1:27017/lastTask').then(()=>{
    console.log("sucssesfully connected");
}).catch(err=>{
    console.log(err);
})
app.use(express.urlencoded({ extended: true }));
app.listen(port , ()=> console.log(`Example app listening on port ${port}!`))

