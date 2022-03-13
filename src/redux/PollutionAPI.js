export default class PollutionAPI {
  static END_POINT = 'https://api.openweathermap.org/data/2.5/air_pollution';

  static LAT = '?lat=';

  static LON = '&lon=';

  static ID = '&appid=57d14da10d2f873314e79507698059f6';

  static async get(lat, lon) {
    return fetch(
      this.END_POINT + this.LAT + lat + this.LON + lon + this.ID,
    ).then((res) => res.json());
  }
}
