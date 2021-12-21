import type { NextPage } from "next";
import { WineList } from "../../components";

const Rose: NextPage = () => {
  const name = "rose";
  return <WineList winename={name}></WineList>;
};

export default Rose;
