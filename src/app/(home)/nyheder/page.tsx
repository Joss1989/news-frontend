import { getArticles, Nyheder } from "@/data/articleData";

const senestePage = async () => {
  const nyheder: Nyheder[] = await getArticles();

  return (
    <>
      <h2>Nyheder</h2>
    </>
  );
};

export default senestePage;
