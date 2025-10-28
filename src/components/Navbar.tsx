"use client"

import Link from "next/link";
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false); // State der styrer, om mobilmenuen er åben (true) eller lukket (false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)// Skifter state til modsat værdi (toggle)
  }

  const menuItems = [
    {label: "Nyheder", href: ""},
    {label: "Sport", href: ""},
    {label: "Vejr", href: ""},
    {label: "Podcast", href: ""},
  ]

  return (
    <header className="w-full bg-black items-center md:flex z-50 h-20">
      <nav className="flex justify-between items-center w-full px-5 text-white">
        <h1 className="text-5xl">
          <Link
            href="/"
          >
            ..news
          </Link>
        </h1>
        
        {/* Desktopmenu — skjult på mobil (hidden), vises fra md og op */}
        <ul className="hidden md:flex space-x-5">
          {menuItems.map((item,index // Gennemløber alle menuItems og laver et listeelement pr. punkt
            ) => (
              <li key={index}>
                {/* Unik key (krav fra React) */}
                <Link
                  href={item.href} // Link til side eller sektion
                  className="uppercase text-xl hover:bg-[rgba(255,255,255,0.1)]" // Styling og hover-effekt
                >
                  {item.label} {/* Tekst der vises (fx “Home”) */}
                </Link>
              </li>
            )
          )}
        </ul>

        <Link
          href="/login"
          className="hidden md:block text-4xl"
        >
          Login
        </Link>
        {/* Container til mobilmenu-knappen (kun synlig på små skærme) */}
        <div className="md:hidden ml-auto">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {" "}
            {/* Klik på knappen åbner/lukker menu */}
            {isOpen ? ( // Viser forskelligt ikon afhængigt af menuens tilstand
              <FaTimes className="h-8 w-8" /> // Kryds-ikon når menuen er åben
            ) : (
              <FaBars className="h-8 w-8 " /> // Hamburger-ikon når menuen er lukket
            )}
          </button>
        </div>
      </nav>
      
      {/* Viser mobilmenuen kun når `isOpen` er tru */}
      {isOpen && ( 
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center space-y-6">
          {" "}
          {/* Fullscreen overlay-menu */}
          <button
            onClick={toggleMenu} // Lukker menuen ved klik på krydset
            aria-label="Close menu" // Tilgængelighed (screen readers)
            className="absolute top-6 right-6" // Positionerer knappen øverst til højre
          >
            <FaTimes className="h-8 w-8 text-black" />{" "}
            {/* Kryds-ikon i mobilmenuen */}
          </button>
          {menuItems.map((item, index) => (
            <Link
              key={index} // Unik nøgle
              href={item.href} // Link til destination
              className="uppercase text-2xl" // Stor tekststørrelse til mobil
              onClick={() => setIsOpen(false)} // Lukker menuen når brugeren klikker på et link
            >
              {item.label} {/* Viser menupunktets tekst */}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar