// // Importerer login-funktionen fra en lokal fil i projektet
// import { login } from "@/data/LoginData";
// // Importerer redirect-funktionen fra Next.js navigation API
// import { redirect } from "next/navigation";

// // Definerer en asynkron funktion, der skal håndtere login-handlingen
// // Første parameter (_) er en placeholder for data, der ikke bruges
// // Anden parameter (formData) indeholder data sendt fra en formular
// export async function loginAction(_: unknown, formData: FormData) {
//   // Kalder login-funktionen med formData og venter på resultatet
//   const res = await login(formData)

//   // Hvis login-forsøget fejler (res er falsy / undefined / null)
//   if (!res) {
//     // Returnerer et objekt med fejlbesked og de indtastede værdier
//     // så de kan vises igen i formularen
//     return { 
//       error: "Invalid inputs", // fejlbesked til brugeren
//       email: formData.get("email") as string, // henter e-mail fra formularen
//       password: formData.get("password") as string // henter password fra formularen
//     }
//   }

//   // Hvis login lykkes, sendes brugeren videre til dashboard-siden
//   redirect("/admin/dashboard")
// }
