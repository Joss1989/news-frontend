import { getArticles, type Nyheder } from "@/data/articleData";

const Hero = async () => {
  const nyheder: Nyheder[] = await getArticles();

  return (
    <section className="max-w-[1000px] mx-auto pb-20">
      <h2 className="text-5xl mb-4">Ny grøn energiplan sat i værk</h2>
      <p className="text-[#e89700] mb-2 ">Nyheder</p>
      <div className="grid grid-cols-2 gap-x-6 gap-y-20">
        {nyheder.slice(0, 1).map((item, index) => (
          <article key={index} className="w-full h-full">
            <figure className="w-full h-full overflow-hidden">
              <img
                src={`http://localhost:3001/assets/images/${item.content[2].url}`}
                alt={item.content[2].altText}
                className="w-full h-full object-cover"
              />
            </figure>
          </article>
        ))}
        <div className="flex flex-col gap-y-5">
          {nyheder.slice(1, 3).map((item, index) => (
            <article key={index} className="grid grid-cols-2 gap-x-2">
              <div className="flex flex-col">
                <h3>
                  <strong>
                    Lorem ipsum, dolor
                  </strong>
                </h3>
                <p className="leading-5">strongLorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Nulla, repudiandae?</p>
                <p className="text-[#e89700] mt-auto">Nyheder</p>
              </div>
              <figure>
                <img
                  src={`http://localhost:3001/assets/images/${item.content[2].url}`}
                  alt={item.content[2].altText}
                />
              </figure>
            </article>
          ))}
        </div>
        {nyheder.slice(3, 5).map((item, index) => (
          <figure key={index} className="w-full h-full relative">
            <img
              src={`http://localhost:3001/assets/images/${item.content[2].url}`}
              alt={item.content[2].altText}
            />
            <p className="leading-5 absolute bottom-0 bg-black text-white py-3 pl-2 pr-25">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque illum deserunt qui, unde pariatur tempore.</p>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Hero;
