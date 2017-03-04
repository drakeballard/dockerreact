let express = require('express')
let path = require('path')
let app = express()
let server = require('http').Server(app)

// Use the environment port of available, or use default to 3000

let port = process.env.PORT || 3000


