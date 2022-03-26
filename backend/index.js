const connectToMongo = require("./db");
const express = require('express')
var cors = require ('cors')
const Book = require("./models/Book.js")
connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
// app.use('/api/notes', require('./routes/notes'))

app.get("/api/getbooks",async(req,res)=>{
console.log("api trigger")
  Book.find({},(err,o)=>{
    if(err){
      // console.log("error  : ",err)
      res.send(err)
    }else{
      // console.log("result : ",o);
      res.json(o)
    }
  })

})

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})
