// "use client"; 
// // Fortæller Next.js, at denne komponent skal køre på klienten (client component)

// import Link from "next/link"; 
// // Importerer Next.js' Link-komponent til intern navigation uden sideopfriskning

// import { useActionState, useEffect } from "react"; 
// // Importerer React-hooks: useActionState (til at håndtere formular-tilstand) og useEffect (til sideeffekter)

// import { loggedin } from "@/data/LoginData"; 
// // Importerer en funktion, der tjekker om brugeren allerede er logget ind

// import { loginAction } from "@/app/action";  
// // Importerer server action, som håndterer selve login-logikken

// import { redirect } from "next/navigation"; 
// // Importerer Next.js’ redirect-funktion, som kan omdirigere brugeren

// const LoginPage = () => {

//   // Brug useActionState til at håndtere login-formularens tilstand.
//   // loginAction bliver kaldt, når formularen indsendes.
//   // 'state' indeholder loginstatus (fx fejlmeddelelser eller brugerdata)
//   // 'formAction' er funktionen, der kaldes, når formularen submitter
//   // 'isPending' er true, mens loginAction kører
//   const [state, formAction, isPending] = useActionState(loginAction, null);

//   // useEffect kører, når komponenten indlæses første gang
//   // useEffect(() => {
//   //     const handleLoggedIn = async () => {
//   //       // Kalder en funktion, der tjekker om brugeren allerede er logget ind
//   //       const res = await loggedin()
//   //       // Hvis brugeren ER logget ind, omdirigeres de direkte til dashboardet
//   //       if (res) redirect("/admin/dashboard");
//   //     }
//   //     handleLoggedIn()
//   // }, []); // Tom array betyder, at effekten kun kører én gang ved mount

//   return (
//     <section className="grid place-items-center min-h-screen bg-gradient-to-b from-neutral-200 to-neutral-800">
//       {/* Hele login-sektionen, centreret på skærmen med gradient baggrund */}

//       {/* Login-formular */}
//       <form
//         action={formAction} // Forbinder formularens "submit" med loginAction via useActionState
//         className="w-full max-w-md mx-4 p-8 bg-neutral-800 rounded-lg shadow-lg flex flex-col space-y-6"
//       >
//         {/* Overskrift */}
//         <h1 className="text-3xl font-semibold text-white text-center capitalize">
//           Admin Login
//         </h1>

//         {/* Email inputfelt */}
//         <input
//           className="admin-input" // Bruger en CSS-klasse (formentlig defineret globalt)
//           type="email" // Inputtype: email
//           name="email" // Navn matcher forventet felt i loginAction
//           placeholder="Email" // Placeholder-tekst
//           defaultValue={state?.email} // Hvis tidligere indtastning findes, vis den
//           required // Gør feltet obligatorisk
//         />

//         {/* Password inputfelt */}
//         <input
//           className="admin-input"
//           type="password" // Inputtype: password
//           name="password" // Navn matcher forventet felt i loginAction
//           placeholder="Password"
//           defaultValue={state?.password}
//           required
//         />

//         {/* Viser fejlmeddelelse hvis login fejler */}
//         {state?.error && (
//           <p className="text-red-500 text-sm text-center">{state.error}</p>
//         )}

//         {/* Login-knap */}
//         <button 
//           type="submit" // Udløser formularens action
//           disabled={isPending} // Deaktiver knappen mens login-action kører
//           className="btn self-center rounded-2xl cursor-pointer"
//         >
//           {/* Viser “Logger ind…” mens login er i gang */}
//           {isPending ? "Logger ind..." : "Login"}
//         </button>

//         {/* Link tilbage til forsiden */}
//         <Link
//           href="/"
//           className="text-sm text-gray-300 hover:underline text-center"
//         >
//           Tilbage til forsiden
//         </Link>
//       </form>
//     </section>
//   );
// };

// // Eksporterer komponenten som standard, så den kan bruges i Next.js
// export default LoginPage;
