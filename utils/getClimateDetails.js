export function getClimateDetails (climate) {
  // temperature: currentClimateData.temp_c,
  // wind: currentClimateData.wind_kph,
  // precipitation: Math.floor(currentClimateData.precip_in)

  const climateDateInfo = climate.last_updated ?? climate.time
  const date = new Date(climateDateInfo)
  const hours = ('0' + `${date.getHours()}`).slice(-2)
  const minutes = ('0' + `${date.getMinutes()}`).slice(-2)

  const formattedDate = `${hours}:${minutes}`
  const temperature = Math.round(climate.temp_c)
  const wind = climate.wind_kph
  const precipitation = Math.floor(climate.precip_in)

  return { date: formattedDate, temperature, wind, precipitation }
}
