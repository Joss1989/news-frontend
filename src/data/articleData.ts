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
  if (!res.ok) throw new Error("Failed to fetch treatments");
  return res.json();
}

// Hent alle articler (READ)
export async function getIsLandinPage(): Promise<Nyheder[]> {
  const res = await fetch(`${API_URL}/landingpage`);
  if (!res.ok) throw new Error("Failed to fetch treatments");
  return res.json();
}
