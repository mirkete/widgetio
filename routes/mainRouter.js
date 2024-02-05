import { Router } from 'express'
import path from 'node:path'

export function createMainRouter () {
  const mainRouter = Router()

  mainRouter.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'views', 'dist', 'index.html'))
  })

  return mainRouter
}
