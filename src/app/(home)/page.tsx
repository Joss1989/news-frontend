import Article1 from "@/components/Article1";
import Article2 from "@/components/Article2";
import Article3 from "@/components/Article3";
import Article4 from "@/components/Article4";
import { getArticles, getIsLandinPage, Nyheder } from "@/data/articleData";

const Home = async () => {
  const landingNyheder: Nyheder[] = await getIsLandinPage();

  return (
    <main className="max-w-[1000px] mx-auto grid grid-cols-4 gap-x-5 py-20 px-5 ms:px-0">
      <Article1 item={landingNyheder[0]} />
      <Article2 items={landingNyheder.slice(1, 3)} />
      {landingNyheder.slice(3, 5).map((item) => (
        <Article3 key={item._id} item={item} />
      ))}
      <Article4 />
    </main>
  );
};

export default Home;
