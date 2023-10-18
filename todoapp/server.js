const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io').listen(server);
const port = process.env.PORT || 3000;
const engines = require('consolidate');
const routes = require('./api');

app.use(express.json());

// view engine setup
app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

server.listen(port,()=>{
	console.log(`Running on port ${port}`);
});

app.use('/api', routes)

app.get('/', (req, res)=>{
	res.send('hello world')
})



