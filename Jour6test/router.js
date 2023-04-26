module.exports = function(app) {

    app.get('/', (req, res) => {
        res.render('index')
    })
    app.get('/chat', (req, res) => {
        res.render('chat.pug')
    })
    
}