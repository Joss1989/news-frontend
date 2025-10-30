import { Nyheder } from "@/data/articleData";
import Link from "next/link";

interface ArticleProps {
  items: Nyheder[];
}

const Article2 = ({ items }: ArticleProps) => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 pt-10 md:pt-0 col-span-4 md:col-span-2 gap-5 h-full">
      {/* Mapper gennem alle artikler (items) og viser dem som links */}
      {items.map((item) => (
        <Link key={item._id} href={`/${item.articleCategory}/${item.slug}`}>
          <article
            key={item._id}
            className="grid md:grid-cols-2 gap-x-2 h-full"
          >
            <div className="flex flex-col order-1 md:-order-1">
              {/* Artikelens titel */}
              <h3>
                <strong>{item.title} </strong>
              </h3>
              {/* Vist brødtekst fra første indholdselement */}
              <p className="leading-5">{item.content[0].text}</p>
              {/* Artikelens kategori og dato */}
              <p className="text-[#e89700] capitalize mt-auto -order-1">
                {item.articleCategory}{" "}
                <span className="text-[#999999]">
                  | {new Date(item.date).getMinutes()} minutter
                </span>
              </p>
            </div>
            <figure className="flex h-full">
              {/* Billede for artiklen */}
              <img
                src={`http://localhost:3001/assets/images/${item.content[2].url}`}
                alt={item.content[2].altText}
                className="w-full h-full object-cover"
              />
            </figure>
          </article>
        </Link>
      ))}
    </section>
  );
};

export default Article2; 

