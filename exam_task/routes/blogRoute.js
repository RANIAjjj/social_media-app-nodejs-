const blogController = require('../controllers/blogController')
const express = require('express')
const route = express.Router()

route.get('/' , (req,res)=>{
    res.send('hello in blogs route')
})

route.post('/add-blog' ,async(req,res)=>{
    let{title,body,author,tags} = req.body
    let data = await blogController.createBlog(title,body,author,tags)
    res.send('ok')
})

route.get('/get-all' , async(req,res)=>{
   try{
    let data = await blogController.getBlogs()
    if(data!="error"){
        res.json({
            items:data,
            msg:"ok"
        })
    } 
   }catch(e){
    console.log(e);
   }
})

route.get('/get-blog' , async(req,res)=>{
    let{title}=req.body
    try{
        let data = await blogController.getBlog(title)
        if(data!="error"){
            res.json({
                items:data,
                msg:"ok"
            })
        } 
    }catch(e){
        console.log(e);
    }
})

route.patch('/update-blog',async(req,res)=>{
    let{title,body}=req.body
    try{
        let data = await blogController.updateBlog(title,body)
        res.send("blog edited successfully")
    }catch(e){
        res.status(500).send('server error')
    }
})

route.delete('/delete-blog',async(req,res)=>{
    let{title}=req.body
    try{
        let data = await blogController.deleteBlog(title)
        res.send("blog deleted successfully")
    }catch(e){
        res.status(500).send('server error')
    }
})

route.post('/search-result' , async(req,res)=>{
    let {author,title,tag}=req.body
    try{
        let data = await blogController.search(author,title)
        if(data!="error"){
            res.json({
                items:data,
                msg:"ok"
            })
        } 
    }catch(e){
        console.log(e);
    }
})
module.exports = route;