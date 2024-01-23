// -	blogs 
// 	Blogs have title, body, photo, author, and tags
// 	Users can search using either the author, the title or any of the tags


const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    author:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User"
    },
    tags: [String],
    createdAt: {
      type: Date,
      default: Date.now
    }
})

const Blog = mongoose.model('Blog' , blogSchema)
Blog.createIndex({ title: 'text' });
Blog.createIndex({ tags: 1 });
Blog.createIndex({ author: 1 });
module.exports= Blog
