import fs from 'node:fs/promises'
import path from 'node:path'
import { getClimateDetails } from '../utils/getClimateDetails.js'
import { getCurrentClimateIndex } from '../utils/getCurrentClimateIndex.js'

export class TestWidgetsModel {
  static getClimate = async (location) => {
    try {
      const data = await fs.readFile(path.join(process.cwd(), 'data', 'climateData.json'), { encoding: 'utf-8' })
      const parsedData = await JSON.parse(data)

      const currentClimateData = parsedData.current
      const currentHourIndex = getCurrentClimateIndex(currentClimateData)
      const hourlyClimateData = parsedData.forecast.forecastday[0].hour.slice(currentHourIndex, currentHourIndex + 5)

      const currentClimate = getClimateDetails(currentClimateData)
      const hourlyClimate = hourlyClimateData.map((climate) => getClimateDetails(climate))

      const climateData = { currentClimate, hourlyClimate }

      return { success: true, data: climateData }
    } catch (e) {
      return { success: false, data: null, error: e }
    }
  }
}
