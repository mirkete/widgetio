export function getCurrentClimateIndex (climate) {
  const dateInfo = climate.last_updated
  const currentHours = new Date(dateInfo).getHours()
  const index = currentHours + 1

  return index
}
