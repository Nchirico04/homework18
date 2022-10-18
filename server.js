const express = require ("express")
const db = require ("./config/connection.js")
const port = process.env.port || 3001
const app = express ()
const routes = require ("./routes")
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(routes)
db.once("open",()=>{
    app.listen (port,()=>{
        console.log (port)
    })
})