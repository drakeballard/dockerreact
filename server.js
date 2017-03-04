// dependencies
let express = require('express')
let path = require('path')
let app = express()
let server = require('http').Server(app)
let io = require('socket.io')(server)
let docker = require('./dockerapi')

// Use the environment port of available, or use default to 3000
let port = process.env.PORT || 3000

// Serve static files from public
app.use(express.static('public'))

// Creates an endpoint which returns it to index.html page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

// The server will start
server.listen(port, () => console.log(`Server Started on the port ${port}`))

function refreshContainers() {
	docker.listContainers({ all: true}, (err, containers) => {
		io.emit('containers.list', containers)
	})
}

setInterval(refreshContainers, 2000)

io.on('connection', socket => {
	socket.on('containers.list', () => {
		refreshContainers()
	})

	socket.on('container.start', args => {
		const container = docker.getContainer(args.id)

		if (container) {
			container.start((err, data) => refreshContainers())
		}
	})
	socket.on('container.stop', args => {
    	const container = docker.getContainer(args.id)

    	if (container) {
        	container.stop((err, data) => refreshContainers())
    	}
	})
})



