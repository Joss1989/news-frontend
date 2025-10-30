export type Nyheder = {
  _id: string
  title: string
  content: Content[]
  publishedAt: number
  section: string
  slug: string
  articleCategory: string
  isLandingpage: boolean
  tags: string[]
  author: string
  date: string
}

export type Content = {
  _id: string
  type: string
  text?: string
  contentbody: Contentbody[]
  url?: string
  altText?: string
  caption?: string
  thumbnail?: string
}

export type Contentbody = {
  type: string
  text: string
  headline?: string
}


const API_URL = "http://localhost:3001/article"


// Hent alle articler (READ)
export async function getArticles(): Promise<Nyheder[]> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch articles");
  return res.json();
}

// Hent landingpage articler (READ)
export async function getIsLandinPage(): Promise<Nyheder[]> {
  const res = await fetch(`${API_URL}/landingpage`);
  if (!res.ok) throw new Error("Failed to fetch landingpage articles");
  return res.json();
}

export async function addArticle(data: FormData): Promise<Nyheder[]> {
  const res = await fetch(`${API_URL}/add`, {
    method: "POST",
    body: data, // Send FormData direkte
  });

  if (!res.ok) throw new Error("Failed to create article");
  return res.json();
}

// Opdater eksisterende article (UPDATE)
// Opdateret til at understøtte FormData
export async function updateArticle(id: string, data: FormData): Promise<Nyheder> {
  const res = await fetch(`${API_URL}/update/${id}`, {
    method: "PUT",
    body: data, // Send FormData direkte
  });

  if (!res.ok) throw new Error("Failed to update article");
  return res.json();
}

// Slet article (DELETE)
export async function deleteArticle(id: string): Promise<{ message: string }> {
  const res = await fetch(`${API_URL}/delete/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete article");
  return res.json();
}

export async function articleBySLug(articleSLug: string): Promise<Nyheder> {
  const res = await fetch(`${API_URL}/slug/${articleSLug}`); // Hent en articles ud fra slug
  if (!res.ok) throw new Error("Failed to fetch articlesBySLug");
  return res.json();
}

export async function getWeatherArticles(): Promise<Nyheder[]> {
  const res = await fetch(`${API_URL}/section/vejr`);
  if (!res.ok) throw new Error("Failed to fetch weather");
  return res.json();
}

