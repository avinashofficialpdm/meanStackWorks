// importing express 
const express = require("express")
const jwt = require("jsonwebtoken")
const cors=require('cors')


const dataService = require("./services/dataservice")

// creating an app using express
const app = express()

app.use(express.json())
// resolve http requests from client

app.use(cors({
    origin:'http://localhost:4200'
}))

// GET -to read data
app.get('/', (req, res) => {
    res.status(401).send("get methode")
})

const appMiddlewares = (req, res, next) => {
    console.log("Application specific middlewares");
    next()
}

app.use(appMiddlewares)

const jwtTokenVerify = (req, res, next) => {
    try {
        const currToken = req.headers["access-token"]
       const data=  jwt.verify(currToken, 'superkey123')
       req.currentAcno=data.currentAcno
        next()
    }
    catch {
        res.status(422).json({
            statusCode: 422,
            status: false,
            message: "please login"
        })
    }
}

// POST -to create data
app.post('/register', (req, res) => {
  dataService.register(req.body.acno, req.body.uname, req.body.password).then(result=>{
    res.status(result.statusCode).json(result)
  })
    
})

app.post('/login', (req, res) => {
    dataService.login(req.body.acno, req.body.password).then(result=>{
        res.status(result.statusCode).json(result)
    })
    
})



app.post('/deposit', jwtTokenVerify, (req, res) => {
    dataService.deposit(req.body.acno, req.body.password, req.body.amt).then(result=>{
        res.status(result.statusCode).json(result)

    })
})

app.post('/withdraw',jwtTokenVerify, (req, res) => {
    const result = dataService.withdraw(req,req.body.acno, req.body.password, req.body.amt)
    res.status(result.statusCode).json(result)
})

app.post('/transaction',jwtTokenVerify, (req, res) => {
    const result = dataService.transaction(req.body.acno, req.body.password, req.body.amt)
    res.status(result.statusCode).json(result)
})


// PUT -to update/modify data
app.put('/', (req, res) => {
    res.send("put methode")
})

// PATCH -to update partially data
app.patch('/', (req, res) => {
    res.send("patch methode")
})

// DELETE -to delete data
app.delete('/', (req, res) => {
    res.send("delete methode")
})


// setup the port number and running the server
app.listen(3000, () => {
    console.log("Server is running in 3000 port");
})