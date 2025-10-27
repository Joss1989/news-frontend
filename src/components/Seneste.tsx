import { getArticles, type Nyheder } from "@/data/articleData"
import { FaArrowRight } from "react-icons/fa";

const Seneste = async () => {
  const seneste: Nyheder[] = await getArticles();

  return (
    <section className='max-w-[1000px] mx-auto mb-20'>
      <div className='flex justify-between pb-2'>
        <h2>Seneste</h2>
        <button className="flex items-center gap-x-2 text-[#e89700]">Vis mere <FaArrowRight /></button>
      </div>
      <section className="grid grid-cols-4 gap-x-5">
        {seneste.slice(3, 7).map((item, index) => (
          <article key={index} className="w-full h-full">
              <figure className="flex flex-col gap-y-2">
                <img
                  src={`http://localhost:3001/assets/images/${item.content[2].url}`}
                  alt={item.content[2].altText}
                  className="w-full h-full object-cover"
                />
                <figcaption>
                  <p className="leading-5 ">Lorem ipsum dolor sit amet consectetur.</p>
                  <p className="text-[#e89700] mb-2">Nyheder</p>
                </figcaption>
              </figure>
            </article>
        ))}
      </section>
    </section>
  )
}

export default Seneste