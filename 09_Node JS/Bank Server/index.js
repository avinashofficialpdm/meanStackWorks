// importing express 
const express = require ("express")

// creating an app using express
const app=express()

// resolve http requests from client


// GET -to read data
app.get('/',(req,res)=>{
    res.send("get methode")
})

// POST -to create data
app.post('/',(req,res)=>{
    res.send("post methode")
})

// PUT -to update/modify data
app.put('/',(req,res)=>{
    res.send("put methode")
})

// PATCH -to update partially data
app.patch('/',(req,res)=>{
    res.send("patch methode")
})

// DELETE -to delete data
app.delete('/',(req,res)=>{
    res.send("delete methode")
})


// setup the port number and running the server
app.listen(3000,()=>{
    console.log("Server is running in 3000 port");
})