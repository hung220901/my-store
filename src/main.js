const express = require('express')
const morgan = require('morgan')
const path = require('path')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')))

app.use(morgan('combined'))
 
app.engine('hbs', handlebars.engine({
   extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views',))


app.get('/', (req, res) => {
   res.render('home');
})

app.get('/about', (req, res) => {
   res.render('about');
})
app.listen(port,() => console.log(`Started server http://localhost:3000`) )