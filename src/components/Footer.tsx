"use client"

import Link from "next/link";
import { useState } from "react";
import ContactFormModal from "./ContactFormModal";

const Footer = () => {
  const [isopen, setIsopen] = useState(false);

  return (
    <footer className="bg-black text-white text-sm">
      <section className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 py-10 px-5">
        <section>
          <h3 className="font-bold mb-2">Nyheder</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Seneste nyt</li>
            <li>Internationalt</li>
            <li>Sport</li>
            <li>
              <Link href="/vejret">Vejret</Link>
            </li>
            <li>
              <button className="cursor-pointer" onClick={() => setIsopen(true)} type="button">
                Kontakt
              </button>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="font-bold mb-2">Lorem ipsum dolor</h3>
          <p className="text-gray-300">
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          </p>
        </section>

        <section>
          <h3 className="font-bold mb-2">Lorem ipsum dolor</h3>
          <p className="text-gray-300">
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          </p>
        </section>

        <section className="md:ml-auto md:order-4 -order-1">
          <h3 className="font-bold mb-2">Om NEWS</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Nyt fra NEWS</li>
            <li>Job i NEWS</li>
            <li>Presse</li>
            <li>Vilkår på NEWS</li>
            <li>Etik og rettelser</li>
            <li>Privatlivspolitik</li>
          </ul>
        </section>
      </section>

      <section className="border-t border-gray-700 px-5">
        <div className="max-w-[1000px] mx-auto py-4 text-center text-gray-400 text-xs">
          Lorem ipsum dolor sit amet, consecteturindolore ultrices | TLF: 12 34
          56 78
        </div>
      </section>

       <ContactFormModal
        open={isopen}
        onClose={() => setIsopen(false)}
      />
    </footer>
  );
};

export default Footer;
