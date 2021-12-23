import type { NextPage } from "next"
import { WineList } from "../../components"

const Port: NextPage = () => {
  const name = "port"
  return <WineList winename={name}></WineList>
}

export default Port
