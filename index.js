import express from 'express'
import path from 'node:path'
import { createMainRouter } from './routes/mainRouter.js'

const app = express()

// Middlewares
app.use(express.static(path.join(process.cwd(), 'views', 'dist')))

// Routes
app.use('/', createMainRouter())

app.listen(3000, () => {
  console.log('App running on http://localhost:3000/')
})
