const User = require('../models/user')

// register new user
const Register = async (_userName, _password, _email) => {
    try {
        let data = await User.create({ userName: _userName, password: _password, email: _email })
        if (data) {
            return data
        }
        else {
            console.log("Error");
        }
    }
    catch (e) {
        console.log(e);
    }

}
 // login existing user
const Login = async (_userName, _password) => {
    try {
        let data = await User.findOne({ userName: _userName})
        let hash = data.password
        return hash
    }
    catch (e) {
        console.log(e);
    }
}
// getProfile(req, res) // get user profile
const getProfile = async(req,res)=>{
    try{
        const data = await User.findOne({ _id: id})
        return data
    }catch(e){
        console.log(e);
    }
}
// edit user 
const editUser = async (_userName, _password) => {
    try {
        let data = await User.updateOne({ userName: _userName }, { $set: { password: _password } })
        if (data) {
            console.log("user edited sucssfully");
        }
    }
    catch(e){
    console.log(e);
    }
}
// followUser(req, res) // follow another user


// unfollowUser(req, res) // unfollow user

// getFollowedFeeds(req, res) // get feed of followed users blogs



module.exports ={Register,Login,getProfile,editUser}