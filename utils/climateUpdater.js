import fs from 'node:fs/promises'
import path from 'node:path'

export function climateUpdater () {
  const options = {
    headers: {
      'X-RapidAPI-Key': process.env.CLIMATE_API_KEY,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  }

  return setInterval(() => {
    fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?days=1&q=Buenos+Aires', options)
      .then((res) => res.json())
      .then(async (data) => {
        fs.writeFile(path.join(process.cwd(), 'data', 'climateData.json'), JSON.stringify(data))
          .then(() => console.log('climate data updated'))
      })
  }, 1000 * 60 * 60 * 2)
}
