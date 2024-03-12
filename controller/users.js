const bcrypt = require('bcrypt');
const User = require('../model/user');
const userRouter = require('express').Router();

userRouter.post('/', async (req, res ) =>{
   const {username, name ,password} = req.body;
    try {
    
     const users = await User.findOne({username:username});

     if(users){
        return res.json({message:'user already exists'})
     }

     const passwordHash = await bcrypt.hash(password,10);

     const user = new User({
   username,
   name,
   passwordHash,
     })

     const savedUser = await user.save();
     res.json(savedUser);
    } catch (error){
     console.log('error in user registration', error.message);
     res.status(500).json({error:'internal server error'});
    }
})

module.exports = userRouter;