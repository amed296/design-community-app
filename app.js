let express = require('express')
let app = express()
let router = require('./routes')
let cors = require('cors')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));
app.use(cors())
app.use('/', router)

app.listen(process.env.PORT || 3000)
