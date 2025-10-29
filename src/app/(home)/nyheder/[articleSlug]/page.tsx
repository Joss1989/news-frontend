import Article4 from "@/components/Article4";
import PodcastSlider from "@/components/PodcastSlider";
import { articleBySLug } from "@/data/articleData";

// Interface for props, hvor params er et Promise med articleSlug string
interface ArticleSlugProps {
  params: Promise<{ articleSlug: string }>;
}

// Async komponent, som henter en articles baseret på slug
const ArticleSlug = async ({ params }: ArticleSlugProps) => {
  // Vent på at params bliver løst og hent articleSlug
  const { articleSlug } = await params;
  // Hent bog data ved hjælp af articleSlug
  const article = await articleBySLug(articleSlug);

  return (
    <>
      <section className="col-span-4">
        <h2>{article.title}</h2>
        <p className="text-[#e89700] capitalize">
          {article.articleCategory}
          <span className="text-[#999999]">
            {" "}
            | {new Date(article.date).getMinutes()} minutter
          </span>
        </p>
        <p>{article.content[1].contentbody[0].headline}</p>
      </section>
      <article className="col-span-4 flex flex-col h-full gap-y-2">
        <figure className="flex h-full">
          <img
            src={`http://localhost:3001/assets/images/${article.content[2].url}`}
            alt={article.content[2].altText}
            className="w-full h-full object-cover"
          />
        </figure>
        {article.content[1].contentbody.map((item, index) => (
          <section key={index}>
            {item.headline && (
              <h3>
                <strong>{item.headline}</strong>
              </h3>
            )}
            <p>{item.text}</p>
          </section>
        ))}
      </article>
      <Article4 />
      <PodcastSlider />
    </>
  );
};

export default ArticleSlug;
