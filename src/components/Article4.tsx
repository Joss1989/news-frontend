import { getArticles, Nyheder } from "@/data/articleData";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Article4 = async () => {
  const nyheder: Nyheder[] = await getArticles();
  return (
    <>
      <section className="col-span-4 pb-2 pt-5 flex justify-between">
        <h2>Seneste</h2>
        <Link href="/nyheder" className="flex items-center gap-x-2 text-[#e89700]">Se mere <span><FaArrowRight /></span></Link>
      </section>
      {nyheder
        .sort((a, b) => a.publishedAt || 0 - b.publishedAt || 0)
        .slice(0, 4)
        .map((item, index) => (
          <article key={index} className="grid col-span-2 sm:col-span-2 md:col-span-1 grid-rows-1 md:grid-rows-2 gap-x-2 h-full">
            <figure className="flex h-full">
              <img
                src={`http://localhost:3001/assets/images/${item.content[2].url}`}
                alt={item.content[2].altText}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="flex flex-col">
              <h3>
                <strong>{item.title}</strong>
              </h3>
              <p className="leading-5">{item.content[0].text}</p>
              <p className="text-[#e89700] capitalize mb-2 mt-auto">{item.articleCategory} <span className="text-[#999999]">| {new Date(item.date).getMinutes()} minutter</span></p>
            </div>
          </article>
        ))}
    </>
  );
};

export default Article4;
