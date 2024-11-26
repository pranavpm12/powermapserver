const express= require('express')

const product= express.Router()

product.get('/product',(req,res)=>{
    console.log(req.query)
    const productdata={
        ProductName:req.query.ProductName,
        ProductPrice:req.query.ProductPrice,
        ProductQuantity:req.query.ProductQuantity

    }
    res.send(productdata)
})

product.get('/viewproduct',(req,res)=>{
    res.send('document retrieved')
})

module.exports=product