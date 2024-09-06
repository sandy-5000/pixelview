import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000

app.get('/api', (_, res) => {
    res.json({ message: '[PixelView] server' })
})

app.listen(PORT, () => {
    console.log(`running on port: ${PORT}`)
})
