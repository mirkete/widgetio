import express from 'express'
import path from 'node:path'
import fs from 'node:fs/promises'
import { createMainRouter } from './routes/mainRouter.js'
import { createApiRouter } from './routes/apiRouter.js'

const app = express()

// Data updater
const options = {
  headers: {
    'X-RapidAPI-Key': '714e83ff36msh6144115b895ce2ap1c7b09jsn5e49b059da04',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
}
setInterval(() => {
  fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?days=1&q=Buenos+Aires', options)
    .then((res) => res.json())
    .then(async (data) => {
      fs.writeFile(path.join(process.cwd(), 'data', 'climateData.json'), JSON.stringify(data))
        .then(() => console.log('climate data updated'))
    })
}, 1000 * 60 * 60 * 2)

// Middlewares
app.use(express.static(path.join(process.cwd(), 'views', 'dist')))
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})

// Routes
app.use('/', createMainRouter())
app.use('/api', createApiRouter())

app.listen(3000, () => {
  console.log('App running on http://localhost:3000/')
})
