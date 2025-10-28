import { Nyheder } from "@/data/articleData";

interface ArticleProps {
  items: Nyheder[];
}

const Article2 = ({ items }: ArticleProps) => {
  return (
    <section className=" grid grid-rows-2 col-span-4 pt-10 md:pt-0 md:col-span-2 gap-5 h-full">
      {items.map((item) => (
        <article key={item._id} className="grid grid-cols-1 md:grid-cols-2 gap-x-2 h-full">
          <div className="flex flex-col">
            <h3>
              <strong>{item.title}</strong>
            </h3>
            <p className="leading-5">{item.content[0].text}</p>
            <p className="text-[#e89700] mt-auto">{item.articleCategory}</p>
          </div>
          <figure className="flex h-full">
            <img
              src={`http://localhost:3001/assets/images/${item.content[2].url}`}
              alt={item.content[2].altText}
              className="w-full h-full object-cover"
            />
          </figure>
        </article>
      ))}
    </section>
  );
};

export default Article2;
