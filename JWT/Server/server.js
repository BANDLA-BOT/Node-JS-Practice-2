const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./Models/userModel')
require('dotenv').config()



const app = express();
//Middlewares
app.use(express.json())
app.use(cors())
//PORT
const PORT = 8000;
//Routes
app.get('/', (req,res)=>{
        res.send('Hello from server')
})
app.post('/api/register', async (req, res)=>{
    try {
        const user = await User.create({
            name: req.body.name,
            email:req.body.email,
            password:req.body.password
        })
        res.json({status: "ok"})
    } catch (error) {
        res.json({status: "error", error: " Duplicate email"})
        
    }
   
})
app.post('/api/loign', async (req, res)=>{
       const user = await User.findOne({
           email:req.body.email,
           password: req.body.password
       })
       if(user){
        return res.json({status: 'ok', user: true})
       }
       else {
        return res.json({status: 'Error', user: false})

       }
})


mongoose.connect('mongodb://localhost:27017/MERN')
app.listen(PORT, ()=>{
    console.log('Server running on PORT '+ PORT);
})
 