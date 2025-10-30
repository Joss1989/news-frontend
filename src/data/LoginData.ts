// const API_URL = "http://localhost:3001/auth/";

// export async function login(formData: FormData) {
//   const res = await fetch(`${API_URL}/login`, {
//     method: "POST",
//     body: formData,
//     credentials: "include",
//     cache: "no-store"
//   });
//   if (!res.ok) return undefined;
//   return res.json();
// }

// export async function loggedin() {
//   const res = await fetch(`${API_URL}/register`, {
//     credentials: "include"
//   });
//   return res.ok;
// }

// export async function logout() {
//   const res = await fetch(`${API_URL}/logout`, {
//     credentials: "include"
//   });
//   if (!res.ok) return undefined;
//   return res.json();
// }
