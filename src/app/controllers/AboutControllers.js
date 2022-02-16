class AboutControllers{
    index(req, res) {
        res.render('about');
    }

}

module.exports = new AboutControllers;