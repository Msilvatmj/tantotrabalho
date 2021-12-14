
const express = require('express')
const path = require('path')
const app = express()

 
app.use(express.static('./public'))

app.use(express.urlencoded({extended: true}))
app.use(express.json({extended:false}))

app.get('/',  (req, res) => {
  res.sendFile(path.join(__dirname,'../public/index.html'))
})

app.get('/navbar'),(req, res)=>{
  res.sendFile(path.join(__dirname,'./public/navbar.html'))
}
 
app.get('/tipos',(req, res)=>{
  connection.query('SELECT * FROM tipos',(err,result)=>{
    if(err)
    res.json('ocoreu um polbelme...')
    else{
      res.json(result)
    }

  })
})


app.post('/inserirutilizador',(req,res)=> {
  console.log(req.body)
  res.text('Cheguei bem e de saude!')
})
const port = 3000

app.listen(port, () => {
    console.log(`Listenning on port ${port}`)
})
