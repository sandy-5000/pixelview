import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { Server } from "socket.io"
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000

app.get('/api', (_, res) => {
    res.json({ message: '[pixelview] server' })
})


const server = http.createServer(app)
const io = new Server(server, {
    path: '/api/socket.io/',
    cors: {
        origin: "*",
    },
})

io.on('connection', (socket) => {
    console.log('A user connected: ' + socket.id)

    socket.on('offer', (data) => {
        socket.broadcast.emit('offer', data)
    })

    socket.on('answer', (data) => {
        socket.broadcast.emit('answer', data)
    })

    socket.on('candidate', (data) => {
        socket.broadcast.emit('candidate', data)
    })

    socket.on('disconnect', () => {
        console.log('User disconnected: ' + socket.id)
    })
})


app.listen(PORT, () => {
    console.log(`running on port: ${PORT}`)
})
