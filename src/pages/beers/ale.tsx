import type { NextPage } from "next"
import { BeerList } from "../../components"

const Ale: NextPage = () => {
  const name = "ale"
  return <BeerList beername={name}></BeerList>
}

export default Ale
