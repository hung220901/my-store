const aboutRouter = require('./about')
const newsRouter = require('./news')


function route(app){
    app.get('/', (req, res) => {
        res.render('home');
     })
     
     app.use('/about', aboutRouter);
     app.use('/news', newsRouter);


     app.get('/search', (req, res) => {
        res.render('search');
     })

}
module.exports = route;