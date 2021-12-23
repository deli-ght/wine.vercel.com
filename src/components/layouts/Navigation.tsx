import Link from "next/link";
import { ROUTES } from "../../constants";

interface SUBSROUTE {
  ID: number;
  PATH: string;
  LABEL: string;
  ORDER: number;
}
interface ROUTE {
  ID: number;
  PATH: string;
  LABEL: string;
  SUBS: SUBSROUTE[];
  // SUBS: Array<SUBSROUTE>;
}

export const Navigation = () => {
  return (
    <header>
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
                      <li key={subRouteObject.ID}>
                        <Link
                          href={`${routeObject.PATH}${subRouteObject.PATH}`}
                        >
                          <a>{subRouteObject.LABEL}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
