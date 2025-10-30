import { Nyheder } from "@/data/articleData";
import Link from "next/link";

interface ArticleProps {
  item: Nyheder;
}

const Article1 = ({ item }: ArticleProps) => {
  return (
    <>
      <section className="col-span-4">
        {/* Renderer artikelens titel */}
        <h2>{item.title}</h2>

        {/* Renderer artikelens kategori og dato med minutformat */}
        <p className="text-[#e89700] capitalize mb-2">
          {item.articleCategory} <span className="text-[#999999]">| {new Date(item.date).getMinutes()} minutter</span>
        </p>
      </section>

      {/* Link til artikelens detaljerede side, baseret på kategori og slug */}
      <Link className="col-span-4 md:col-span-2" href={`/${item.articleCategory}/${item.slug}`}>
        <article className="col-span-4 md:col-span-2 flex flex-col h-full">
          <figure className="flex h-full">
            {/* Render billede for artiklen */}
            <img
              src={`http://localhost:3001/assets/images/${item.content[2].url}`}
              alt={item.content[2].altText}
              className="w-full h-full object-cover"
            />
          </figure>
        </article>
      </Link>
    </>
  );
};

export default Article1; // Eksporterer Article1 komponenten som default eksport

