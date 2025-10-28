import { Nyheder } from "@/data/articleData";

interface ArticleProps {
  item: Nyheder;
}
const Article1 = ({ item }: ArticleProps) => {
  return (
    <>
      <section className="col-span-4">
        <h2>{item.title}</h2>
        <p className="text-[#e89700] mb-2">{item.articleCategory}</p>
      </section>
      <article className="col-span-4 md:col-span-2 flex flex-col h-full">
        <figure className="flex h-full">
          <img
            src={`http://localhost:3001/assets/images/${item.content[2].url}`}
            alt={item.content[2].altText}
            className="w-full h-full object-cover"
          />
        </figure>
      </article>
    </>
  );
};

export default Article1;
