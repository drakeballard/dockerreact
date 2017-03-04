// dependencies
let express = require('express')
let path = require('path')
let app = express()
let server = require('http').Server(app)

// Use the environment port of available, or use default to 3000
let port = process.env.PORT || 3000

// Serve static files from public
app.use(express.static('public'))

// Creates an endpoint which returns it to index.html page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

// The server will start
server.listen(port, () => console.log(`Server Started on the port ${port}`))



