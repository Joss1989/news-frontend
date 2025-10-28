export type Podcast = {
  _id: string
  headline: string
  info: string
  length: number
  podcast: string
  thumbnail: string
  releaseDate: string
}

const API_URL = "http://localhost:3001/podcast"

// Hent alle podcast (READ)
export async function getPodcast(): Promise<Podcast[]> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch podcast");
  return res.json();
}