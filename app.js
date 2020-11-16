let express = require('express')
let app = express()
let router = require('./routes')
console.log("Hello app")
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.use('/', router)

app.listen(process.env.PORT || 3000)
