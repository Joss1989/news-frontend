"use client";

import Link from "next/link";

const menuItems = [
  // En liste over menupunkter i adminpanelet
  { href: "/admin/dashboard/podcast", label: "Podcast" },
];

const AdminSidebar = () => {
 
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
      </ul>
    </div>
  );
};

// Eksporterer komponenten, så den kan bruges i andre filer
export default AdminSidebar;
