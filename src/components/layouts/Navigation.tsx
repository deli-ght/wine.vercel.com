import Link from "next/link"
import { ROUTES } from "../../constants"
import styled from "@emotion/styled"

interface SUBSROUTE {
  ID: number
  PATH: string
  LABEL: string
  ORDER: number
}
interface ROUTE {
  ID: number
  PATH: string
  LABEL: string
  ENGLISH: string
  SUBS: SUBSROUTE[]
  // SUBS: Array<SUBSROUTE>;
}

export const Navigation = () => {
  return (
    <Title>
      <h1>Wine and Beers</h1>
      <nav>
        <ul>
          {ROUTES.map((routeObject: ROUTE) => {
            return (
              <li key={routeObject.ID}>
                <Link href={routeObject.PATH}>
                  <a>{routeObject.LABEL}</a>
                </Link>
                <ul>
                  {routeObject.SUBS.map((subRouteObject: SUBSROUTE) => {
                    return (
                      <List theme={routeObject.ENGLISH} key={subRouteObject.ID}>
                        <Link
                          href={`${routeObject.PATH}${subRouteObject.PATH}`}
                        >
                          <a>{subRouteObject.LABEL}</a>
                        </Link>
                      </List>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
      </nav>
    </Title>
  )
}

const Title = styled.h1`
  font-size: 32px;
`

const List = styled.li`
  display: inline-block;
  position: relative;
  width: 100px;
  margin: 20px;
  font-size: 18px;
  &::after {
    content: " ";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 0;
    background-color: ${(props) =>
      props.theme == "Beer" ? "#F2B05E" : "#A60303"};
    transition: width 0.4s linear;
  }
  &:hover::after {
    width: 100%;
  }
`
