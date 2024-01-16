import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';

const app = express()

app.use(express.json())
app.use(cors())


const { Schema } = mongoose;

const productSchema = new Schema({
  category:String,
  title: String,
  image:String,
  price:Number
});

const Product = mongoose.model('Product', productSchema);

app.get("/product",async (req,res)=>{
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(200).json({message:error})
        
    }
})

app.get("/product/:id",async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(200).json({message:error})
        
    }
})


app.delete("/product/:id",async (req,res)=>{
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("product deleted")
    } catch (error) {
        res.status(200).json({message:error})
        
    }
})

app.put("/product/:id",async (req,res)=>{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id)
        res.status(200).json('product updated')
    } catch (error) {
        res.status(200).json({message:error})
        
    }
})

app.post("/product",async (req,res)=>{
    try {
        const newProduct = new Product({...req.body})
        await newProduct.save()
        res.status(200).json(newProduct)
    } catch (error) {
        res.status(200).json({message:error})
        
    }
})

const port = 8000
const url='mongodb+srv://tu833kmn0:mehriban098@cluster0.xewqdvo.mongodb.net/'

mongoose.connect(url).then(console.log('db connected'))

app.listen(port, () => {
  console.log(`Example app listening on port`)
})