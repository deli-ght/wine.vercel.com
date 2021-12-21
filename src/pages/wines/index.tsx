import type { NextPage } from "next";
import { WineList } from "../../components";

const Wines: NextPage = () => {
  const name = "wines";
  return <WineList winename={name}></WineList>;
};

export default Wines;
