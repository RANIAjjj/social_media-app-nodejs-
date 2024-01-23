const express = require('express')
const userController = require('../controllers/userController')
const rout = express.Router()
const bcrypt = require('bcrypt');

rout.get('/', (rq, res) => {
    res.send('hello in user rout')
})

rout.post('/register', async (req, res) => {
    let { userName, password, email } = req.body
    bcrypt.hash(password, 10, async function (err, hash) {
        let data = await userController.Register(userName, hash, email)
        // console.log(data);
        res.send('ok');
    })
})

rout.post('/login', async (req, res) => {
    let { userName, password } = req.body
    let data = await userController.Login(userName, password)
    //  console.log(data);
    bcrypt.compare(password, data, function (err, result) {
        if (result == true) {
            console.log("correct usaer and password");
        }
    })

    res.send('ok post route is done for login');
})

rout.get('/:id' , async(req,res)=>{
    try{
        let data = await userController.getProfile(req.params.id)
        res.json(data)
    }catch(e){
        console.log(e);
    }
})

rout.put('/:id/follow' , async(req,res)=>{
    if(req.body._id !== req.params.id){
        try{
            const user  = await userController.getProfile(req.body._id)
            const currentUser = await userController.getProfile(req.params.id)
            if(!currentUser.followers.includes(req.body._id)){
                await currentUser.
            }
        }
    }else{
        res.status(500).json("you cannot follow your self")
    }
    
 
})