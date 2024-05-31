const express = require('express');
const Product = require('./models/productModel')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())


//Create server
const PORT = 3000

//ROUTES 
app.get('/',(req,res)=>{
    res.status(200).json({message:'Hello from express server'})
})
app.post('/products', async (req,res)=>{
   try {
        const Prod = await Product.create(req.body)
        res.status(200).json(Prod)

    
   } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
   }
})


// mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost:27017/')
.then(()=>{
    console.log('Connected to DB');
    //run server
app.listen(PORT,()=>{
    console.log('Server Running on '+ PORT);
})
})
.catch((err)=>console.log(err))