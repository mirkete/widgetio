import { Router } from 'express'
import { WidgetsController } from '../controllers/WidgetsController.js'
import { TestWidgetsModel } from '../models/TestWidgetsModel.js'

function createApiRouter () {
  const apiRouter = Router()
  const widgetsController = new WidgetsController({ model: TestWidgetsModel })

  apiRouter.get('/', (req, res) => {
    res.send('ok')
  })

  apiRouter.get('/climate', widgetsController.getClimate)

  return apiRouter
}

export { createApiRouter }
