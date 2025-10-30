
const API_URL = "http://localhost:3001/contact/add";

export async function createContact(data: any) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(data), // send som JSON
  });

  if (!res.ok) throw new Error(`Failed to create contact`);
  return res.json();
}
