import type { NextPage } from "next"
import { BeerList } from "../../components"

const Stouts: NextPage = () => {
  const name = "stouts"
  return <BeerList beername={name}></BeerList>
}

export default Stouts
