import type { NextPage } from "next";
import { WineList } from "../../components";

const Whites: NextPage = () => {
  const name = "whites";
  return <WineList winename={name}></WineList>;
};

export default Whites;
