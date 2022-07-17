const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const Controller = require('./controllers/controller')

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', Controller.home)

app.get('/about', Controller.about)

app.get('/service', Controller.service)

app.get('/frppaneltank', Controller.frppaneltank)

app.get('/frpcylindertank', Controller.frpcylindertank)

app.get('/frpstptank', Controller.frpstptank)

app.get('/gallery', Controller.gallery)


app.listen(port, () => console.log(`aplikasi berjalan di port ${port}`))