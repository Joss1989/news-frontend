import { getArticles, Nyheder } from "@/data/articleData";

const senestePage = async () => {
  const nyheder: Nyheder[] = await getArticles();

  return (
    <>
      {nyheder.map((item, index) => (
        <article key={index} className="grid md:grid-rows-2 col-span-4 md:col-span-2 lg:col-span-1">
          <figure className="h-full">
            <img
              src={`http://localhost:3001/assets/images/${item.content[2].url}`}
              alt={item.content[2].altText}
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="flex flex-col gap-y-1">
            <h3>
              <strong>{item.title}</strong>
            </h3>
            <p className="leading-5">{item.content[0].text}</p>
            <p className="text-[#e89700] py-2 mt-auto">
              {item.articleCategory}
            </p>
          </div>
        </article>
      ))}
    </>
  );
};

export default senestePage;
