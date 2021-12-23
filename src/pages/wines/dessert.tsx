import type { NextPage } from "next"
import { WineList } from "../../components"

const Dessert: NextPage = () => {
  const name = "dessert"
  return <WineList winename={name}></WineList>
}

export default Dessert
