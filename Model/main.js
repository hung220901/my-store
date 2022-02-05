const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000
app.use(morgan('combined'))

app.engine('handlebars', handlebars())

app.get('/',(req, res) => {
  return res.send('Hello World');
})

app.listen(port,() => console.log(`Started server http://localhost:3000`) )