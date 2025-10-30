"use client"; 

import { getPodcast, Podcast } from "@/data/podcastData"; 
import { useEffect, useState } from "react"; 
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io"; 
import PodcastCard from "./PodcastCard"; 

const PodcastSlider = () => {
  const [podcast, setPodcast] = useState<Podcast[]>([]); // State for at gemme podcast-data
  const [currentIndex, setCurrentIndex] = useState(0); // State for at holde styr på den aktuelle podcast, der vises

  // useEffect kører når komponenten loader første gang
  useEffect(() => {
    getPodcast().then(setPodcast); // Hent podcast-data og opdater state
  }, []); // Tom dependencies-array betyder kun kør én gang ved komponentens første render

  // Funktion til at håndtere navigation til forrige podcast
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? podcast.length - 1 : prev - 1 // Hvis vi er på første podcast, gå til den sidste
    );
  };

  // Funktion til at håndtere navigation til næste podcast
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === podcast.length - 1 ? 0 : prev + 1 // Hvis vi er på sidste podcast, gå til den første
    );
  };

  return (
    <>
      <section className="col-span-4 pb-2 pt-5">
        <h2>Podcast</h2> {/* Titel for podcast-sektionen */}
      </section>
      <section className="col-span-4">
        <section className="overflow-x-hidden"> {/* Sørger for, at indholdet ikke går ud over containerens grænser */}
          <ol className="grid grid-flow-col auto-cols-[550px] gap-x-5 transition-transform duration-1000 ease-in-out " 
            // Laver en horisontal scroll og justerer positionen afhængig af currentIndex
            style={{ transform: `translateX(-${currentIndex * 39}%)` }}
          >
            {/* Mapper over podcast-arrayet og viser hver podcast med PodcastCard komponenten */}
            {podcast.map((item) => (
              <PodcastCard key={item._id} podcast={item} />
            ))}
          </ol>
        </section>

        {/* Navigation for at skifte podcast (forrige og næste) */}
        <section className="text-3xl flex items-center w-full justify-center gap-x-5 mt-4">
          {/* Knappen til at gå til forrige podcast */}
          <button className="cursor-pointer" type="button" onClick={handlePrev}>
            <IoIosArrowDropleft /> {/* Venstre pil-ikon */}
          </button>

          {/* Knappen til at gå til næste podcast */}
          <button className="cursor-pointer" type="button" onClick={handleNext}>
            <IoIosArrowDropright /> {/* Højre pil-ikon */}
          </button>
        </section>
      </section>
    </>
  );
};

export default PodcastSlider;
