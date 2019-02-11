function ageOnPlanet(planet, earthYears) {
  switch (planet) {
    case 'mercury': return earthYears / 0.2408467;
    case 'venus': return earthYears / 0.61519726;
    case 'mars': return earthYears / 1.8808158;
    case 'jupiter': return earthYears / 11.862615;
    case 'saturn': return earthYears / 29.447498;
    case 'uranus': return earthYears / 84.016846;
    case 'neptune': return earthYears / 164.79132;
    default: return earthYears;
  }
}

export function age(planet, seconds) {
  return Math.round(ageOnPlanet(planet, seconds / 31557600) * 100) / 100;
}
