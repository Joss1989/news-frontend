import { getArticles, Nyheder } from "@/data/articleData";

const senestePage = async () => {
  const nyheder: Nyheder[] = await getArticles();

  return (
    <section className="grid grid-cols-4 gap-5 p-20 ">
      {nyheder.map((item, index) => (
        <article key={index} className="grid grid-rows-2">
          <figure className="h-full">
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
            <p className="text-[#e89700] py-2">
              {item.articleCategory}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default senestePage;
