"use client"; // Angiver at denne komponent er en Client Component i Next.js 13+

import AdminSidebar from "@/components/dashboard/AdminSidebar";
// import { loggedin } from "@/data/LoginData";
// import AdminSidebar from "@/components/AdminSidebar"; // Import af AdminSidebar komponenten
// import { loggedin } from "@/data/LoginData"; // Import af login-funktion til at tjekke login status
import { useRouter } from "next/navigation"; // Next.js hook til navigation (client-side)
import { useEffect, useState } from "react"; // React hooks til state og sideeffekter

// RootLayout komponenten, som modtager children som props og er readonly (immutable)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter(); // Initialiserer router for navigation
  const [isVerified, setIsVerified] = useState(false); // State til at holde styr på om brugeren er verificeret/logget ind

  // useEffect kører ved første render og hver gang router ændrer sig (men router ændrer sig normalt ikke)
  // useEffect(() => {
  //   const handleLoggedIn = async () => {
  //     const res = await loggedin(); // Kalder async funktionen loggedin for at tjekke om brugeren er logget ind
  //     if (!res) router.push("/login"); // Hvis ikke logget ind, redirect til login side
  //     else setIsVerified(true); // Hvis logget ind, sæt isVerified til true for at tillade visning af indhold
  //   };
  //   handleLoggedIn(); // Kald funktionen for at tjekke login status
  // }, [router]);

  // if (!isVerified) return null; // Hvis brugeren ikke er verificeret endnu (login tjekket og godkendt), returneres null (intet renderes)

  // Når brugeren er verificeret, vises layoutet med sidebar og hovedindhold
  return (
    <section className="flex h-screen"> {/* Wrapper med flexbox og fuld højde på skærmen */}
      <div className="w-64"> {/* Sidebar container med fast bredde på 16rem (64 i tailwind) */}
        <AdminSidebar /> {/* Sidebar komponenten */}
      </div>
      <main className="flex-1 p-6 bg-neutral-100 flex justify-center overflow-y-auto"> {/* Hovedindhold som fylder resten af pladsen, har padding, baggrundsfarve og scrollbar ved overflow */}
        <div className="w-full max-w-6xl">{children}</div> {/* Begrænser bredden på indhold til max 6xl */}
      </main>
    </section>
  );
}
