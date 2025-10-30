export type Podcast = {
  _id: string
  headline: string
  info: string
  length: number
  podcast: string
  thumbnail: File | null
  releaseDate: string
}

const API_URL = "http://localhost:3001/podcast"

// Hent alle podcast (READ)
export async function getPodcast(): Promise<Podcast[]> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch podcast");
  return res.json();
}

// Opret ny Podcast (CREATE)
// Opdateret til at understøtte FormData
export async function createPodcast(data: FormData): Promise<Podcast> {
  const res = await fetch(`${API_URL}/add`, {
    method: "POST",
    body: data, // Send FormData direkte
  });

  if (!res.ok) throw new Error("Failed to create podcast");
  return res.json();
}

// Opret ny Podcast (UPDATE)
// Opdateret til at understøtte FormData
export async function updatePodcast(id: string, data: FormData): Promise<Podcast> {
  const res = await fetch(`${API_URL}/update/${id}`, {
    method: "PUT",
    body: data, // Send FormData direkte
  });

  if (!res.ok) throw new Error("Failed to update podcast");
  return res.json();
}

// Opret ny Podcast (DELETE)
// Opdateret til at understøtte FormData
export async function deletePodcast(id: string): Promise<boolean> {
  const res = await fetch(`${API_URL}/delete/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete podcast");
  return true;
}