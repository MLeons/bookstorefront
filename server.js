const express = require('express')
const path = require('path')

const port = process.env.PORT || 8000
const app = express()

app.use(express.static(__dirname + '/client'))

app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)