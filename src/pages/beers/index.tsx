import type { NextPage } from "next";
import { BeerList } from "../../components";

const Index: NextPage = () => {
  const name = "index";
  return <BeerList beername={name}></BeerList>;
};

export default Index;
