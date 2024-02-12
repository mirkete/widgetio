import { TestWidgetsModel } from '../models/TestWidgetsModel.js'

export class WidgetsController {
  constructor ({ model }) {
    this.model = model
  }

  getClimate = async (req, res) => {
    const response = await TestWidgetsModel.getClimate('Buenos Aires')

    if (!response.success) return res.status(500).send(response.error)

    res.status(200).json(response.data)
  }
}
