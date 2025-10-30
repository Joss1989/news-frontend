const API_URL = "http://api.openweathermap.org/data/2.5/weather?zip=8500,dk&units=metric&lang=da&appid=03673cf66e6975b9d028dec1fd901fb4"

export async function getWeather(){
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch weather");
  return res.json();
}