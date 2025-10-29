export type Contact = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const API_URL = "http://localhost:3001/contact/add";

export async function createContact(contact: Contact) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(contact),
  });

  if (!res.ok) {
    throw new Error(`Failed to create contact: ${res.statusText}`);
  }

  return res.json();
}
