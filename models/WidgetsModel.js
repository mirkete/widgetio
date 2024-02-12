import { CLIMATE_API_KEY, CLIMATE_API_URL } from '../constants'

export class WidgetsModel {
  getClimate = async (location) => {
    const url = new URL(CLIMATE_API_URL)

    url.searchParams.set('days', '3')

    const options = {
      headers: {
        'X-RapidAPI-Key': CLIMATE_API_KEY,
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    }

    try {
      url.searchParams.set('q', location)

      const climateResponse = await fetch(url, options)
      const climateData = await climateResponse.json()

      return { sucess: true, data: climateData }
    } catch (e) {
      return { sucess: false, data: null, error: `DATABASE ERROR ${e}` } // hacer error handlers
    }
  }
}
