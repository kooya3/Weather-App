interface CurrentWeather {
    is_day: number;
    temperature: number;
    time: string;
    weathercode: number;
    winddirection: number;
    windspeed: number;
  }

  interface Daily {
  apparent_temperature_max: [number];
  apparent_temperature_min: [number];
  sunrise: [string];
  sunset: [string];
  temperature_2m_max: [number];
  temperature_2m_min: [number];
  time: [string];

    