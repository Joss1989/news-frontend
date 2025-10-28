import { Nyheder } from "@/data/articleData";

interface ArticleProps {
  item: Nyheder;
}
const Article3 = ({ item }: ArticleProps) => {
  return (
    <article className="flex col-span-4 md:col-span-2 w-full h-full pt-10 md:pt-20">
      <figure className="relative grid grid-cols-1">
        <img
          src={`http://localhost:3001/assets/images/${item.content[2].url}`}
          alt={item.content[2].altText}
          className="w-full h-full object-cover"
        />
        <p className="leading-5 md:absolute relative bottom-0 inset-x-0 bg-black text-white p-4">
          {item.content[0].text}
        </p>
      </figure>
    </article>
  );
};

export default Article3;
