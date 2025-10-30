const API_URL = "http://api.openweathermap.org/data/2.5/forecast?zip=8500,dk&units=metric&lang=da&appid=03673cf66e6975b9d028dec1fd901fb4"

export async function getWeather(): Promise<Weather>{
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch weather");
  return res.json();
}

export interface Weather {
  cod: string
  message: number
  cnt: number
  list: List[]
  city: City
}

export interface List {
  dt: number
  main: Main
  weather: Weather[]
  clouds: Clouds
  wind: Wind
  visibility: number
  pop: number
  sys: Sys
  dt_txt: string
  rain?: Rain
}

export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  sea_level: number
  grnd_level: number
  humidity: number
  temp_kf: number
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface Clouds {
  all: number
}

export interface Wind {
  speed: number
  deg: number
  gust: number
}

export interface Sys {
  pod: string
}

export interface Rain {
  "3h": number
}

export interface City {
  id: number
  name: string
  coord: Coord
  country: string
  population: number
  timezone: number
  sunrise: number
  sunset: number
}

export interface Coord {
  lat: number
  lon: number
}

