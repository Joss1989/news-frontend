import { getArticles, Nyheder } from "@/data/articleData";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Article4 = async ({}) => {
  // Henter artikler fra getArticles funktionen
  const nyheder: Nyheder[] = await getArticles();
  return (
    <>
      <section className="col-span-4 pb-2 pt-5 flex justify-between">
        {/* Vist som overskrift for sektionen */}
        <h2>Seneste</h2>
        
        {/* Link til den fulde nyhedssektion, med en pil-ikon som viser videre */}
        <Link href="/nyheder" className="flex items-center gap-x-2 text-[#e89700]">
          Se mere <span><FaArrowRight /></span>
        </Link>
      </section>
      
      {/* Sorter artiklerne efter publiceringsdato og vis de 4 nyeste */}
      {nyheder
        .sort((a, b) => a.publishedAt || 0 - b.publishedAt || 0) // Hvis resultatet er størrer placeres A før B og positiv omvendt, har begge nul i værdi bliver rækkefølgen uændret
        .slice(0, 4) // Vælger de 4 nyeste artikler
        .map((item, index) => (
          // For hver artikel, render et link og artikel-indhold
          <Link key={index} className="col-span-2 md:col-span-1" href={`/${item.articleCategory}/${item.slug}`}>
            <article className="grid col-span-2 sm:col-span-2 md:col-span-1 grid-rows-1 md:grid-rows-[150px] gap-x-2 h-full ">
              <figure className="flex h-full">
                {/* Render billede for artiklen */}
                <img
                  src={`http://localhost:3001/assets/images/${item.content[2].url}`}
                  alt={item.content[2].altText}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="flex flex-col">
                {/* Artikelens titel */}
                <h3 className="line-clamp-1">
                  <strong>{item.title}</strong>
                </h3>
                {/* Vist kategori og publiceringstidspunkt */}
                <p className="text-[#e89700] capitalize mb-2">{item.articleCategory} <span className="text-[#999999]">| {new Date(item.date).getMinutes()} minutter</span></p>
              </div>
            </article>
          </Link>
        ))}
    </>
  );
};

export default Article4;
