export type Video = {
  _id: string
  title: string
  url: string
  description: string
  duration: number
  thumbnail: string
}

const API_URL = "http://localhost:3001/video"

// Hent alle videor (READ)
export async function getVideor(): Promise<Video[]> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch treatments");
  return res.json();
}