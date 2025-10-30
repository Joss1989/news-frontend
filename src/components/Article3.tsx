import { Nyheder } from "@/data/articleData";
import Link from "next/link";

interface ArticleProps {
  item: Nyheder;
}
const Article3 = ({ item }: ArticleProps) => {
  return (
    <article className="flex col-span-4 md:col-span-2 w-full h-full pt-10 md:pt-20">
      {/* Link, der fører til den detaljerede artikel-side baseret på kategori og slug */}
      <Link className="col-span-2" href={`/${item.articleCategory}/${item.slug}`}>
        <figure className="relative grid grid-cols-1">
          {/* Billede for artiklen */}
          <img
            src={`http://localhost:3001/assets/images/${item.content[2].url}`}
            alt={item.content[2].altText}
            className="w-full h-full object-cover"
          />
          {/* Artikelens beskrivelse vises over billedet med en sort baggrund */}
          <p className="leading-5 md:absolute relative bottom-0 inset-x-0 bg-black text-white p-4">
            {item.content[0].text}
          </p>
        </figure>
      </Link>
    </article>
  );
};

export default Article3;
