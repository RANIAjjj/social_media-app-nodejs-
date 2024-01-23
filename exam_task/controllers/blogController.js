const Blog = require('../models/blog')

 // create new blog
const createBlog = async(_title,_body,_author,_tags)=>{
    try{
        let data = await Blog.create({title:_title,body:_body,author:_author,tags:_tags})
        if (data) {
            return data
        }
    }catch(e){
        console.log(e);
    }
}
 // get all blogs or paginated blogs
const getBlogs = async()=>{
    try{
        let data = await Blog.find()
        if (data) {
            return data
        }
    }catch(e){
        console.log(e);
    }
}
 // get single blog
const getBlog = async(_title)=>{
    try{
        let data = await Blog.find({title:_title})
        if (data) {
            return data
        }
    }catch(e){
        console.log(e);
    }
}
 // update existing blog
const updateBlog = async(_title,_body)=>{
    try{
        let data = await Blog.updateOne({title:_title},{$set:{body:_body}})
        if (data) {
            return data
        }
    }catch(e){
        console.log(e);
    }
}
 // delete blog
const deleteBlog = async(_title)=>{
    try{
        let data = await Blog.deleteOne({title:_title})
        if (data) {
            return data
        }
    }catch(e){
        console.log(e);
    }
}
 // search blogs by author, title, tags
const search = async(_author,_title,_tag)=>{
    try{
        // let data = await Blog.find({$or:[{author:_author},{title:_title},{tag:_tag}]})
        let quary = {}
        if(_author){
            quary.author = _author;
        }
        if(_title){
            quary.title = { $regex: _title, $options: 'i' };
        }
        if(_tags && _tags.length){
            quary.tags = { $in: _tags };
        } 
        let data = await Blog.find(quary)
        return data
    }catch(e){
        console.log(e);
    }
}

module.exports={search,createBlog,getBlogs,getBlog,updateBlog,deleteBlog}

