const express = require('express')
const app = express()
const http = require('http').Server(app)
const port = 3000
// const io = require('socket.io')(http)

app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})


http.listen(port, () => {
    console.clear()
    console.log(`Servidor inciado en ${port}`)
})

/*
**  ElasticSearch
*/
const db = require('./elastic.js')
db.run();