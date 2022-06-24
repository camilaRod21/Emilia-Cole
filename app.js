const express= require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.static(path.resolve(__dirname, 'public')))

app.get('/', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'index.html')))

app.get('/about', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'about.html')))

app.get('/contact', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'contact.html')))

app.get('/music', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'music.html')))

app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'views', '404.html')))

app.listen(port, () => console.log(`el servidor fue levantado con exito el dia miercoles a las 9 de la mañana http://localhost:${port} `))