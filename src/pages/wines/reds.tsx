import type { NextPage } from "next"
import { WineList } from "../../components"

const Reds: NextPage = () => {
  const name = "reds"
  return <WineList winename={name}></WineList>
}

export default Reds
