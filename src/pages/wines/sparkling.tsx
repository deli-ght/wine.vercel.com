import type { NextPage } from "next";
import { WineList } from "../../components";

const Sparkling: NextPage = () => {
  const name = "sparkling";
  return <WineList winename={name}></WineList>;
};

export default Sparkling;
