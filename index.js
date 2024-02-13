import express from 'express'
import path from 'node:path'
import 'dotenv/config.js'
import { createMainRouter } from './routes/mainRouter.js'
import { createApiRouter } from './routes/apiRouter.js'
import { climateUpdater } from './utils/climateUpdater.js'

const app = express()

const port = process.env.PORT ?? 3000

// Data updater
climateUpdater()

// Middlewares
app.use(express.static(path.join(process.cwd(), 'views', 'dist')))
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})

// Routes
app.use('/', createMainRouter())
app.use('/api', createApiRouter())

app.listen(port, () => {
  console.log('App running on http://localhost:3000/')
})
