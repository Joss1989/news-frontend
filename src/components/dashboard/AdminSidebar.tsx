"use client";

// import { logout } from "@/data/LoginData";
// import { logout } from "@/data/LoginData";
// Importerer funktionen 'logout' — den håndterer sandsynligvis fjernelse af session/cookie/token
import Link from "next/link";
// Importerer Next.js' 'Link' komponent, som bruges til intern navigation uden sideopfriskning
// import { useRouter } from "next/navigation";
// Importerer 'useRouter' hook fra Next.js — giver adgang til navigation (fx router.push())

const menuItems = [
  // En liste over menupunkter i adminpanelet
  { href: "/admin/dashboard/article", label: "Article" },
  { href: "/admin/dashboard/podcast", label: "Podcast" },
  { href: "/admin/dashboard/contact", label: "Contact" },
];

const AdminSidebar = () => {
  // const router = useRouter();
  // useRouter giver mulighed for at navigere programmatisk (fx efter logout)

  // Funktion der håndterer logout
  // const handleLogout = async () => {
  //   await logout(); // Kalder logout-funktionen (fx fjerner login-token eller session)
  //   router.push("/"); // Sender brugeren tilbage til forsiden efter logout
  // };

  // ---------- JSX (RETURN) ----------
  return (
    <div className="w-64 bg-neutral-400 text-white p-4 h-screen fixed">
      {/* Overskrift/link til hoved-dashboardet */}
      <Link
        href="/admin/dashboard"
        className="text-2xl font-bold mb-4 block text-center"
      >
        Admin Panel
      </Link>

      {/* Navigationselementer (liste) */}
      <ul className="space-y-4">
        {/* Første element – link tilbage til forsiden */}
        <li>
          <Link
            href="/"
            className="bg-neutral-200 text-neutral-950 cursor-pointer p-2 block rounded w-full text-center capitalize font-black"
          >
            News
          </Link>
        </li>

        {/*Gennemløber alle menuItems og opretter et <li> for hvert punkt - key={href}: sikrer unikke nøgler i React-listen*/}
        {menuItems.map(({ href, label }) => (
          <li
            key={href}
            className="hover:bg-[#e89700] border-2 rounded font-black"
          >
            <Link
              href={href}
              className="block w-full px-5 py-5 h-full text-white"
            >
              {label} {/* Teksten for menupunktet (fx "Users") */}
            </Link>
          </li>
        ))}

        {/* Logout-knap nederst */}
        {/* <li>
          <button
            onClick={handleLogout} // Kalder handleLogout ved klik
            className="bg-neutral-200 text-neutral-950 cursor-pointer p-2 block rounded w-full text-center font-black"
          >
            Logout
          </button>
        </li> */}
      </ul>
    </div>
  );
};

// Eksporterer komponenten, så den kan bruges i andre filer
export default AdminSidebar;
