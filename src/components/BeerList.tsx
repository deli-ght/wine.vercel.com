import { BeerDetail } from "./BeerDetail";
import { useBeerData } from "../hooks/useBeerData";
import { Error, Loading } from "./index";
import { Beer } from "../types/Beer";

interface BeerListProps {
  beername: string;
}
export const BeerList = ({ beername }: BeerListProps) => {
  const { data, error } = useBeerData(beername);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>{beername}</h1>
      <main>
        {data.map((beerData: Beer) => {
          return (
            <BeerDetail
              key={`${beername}-id-${beerData.id}`}
              beerdata={beerData}
            />
          );
        })}
      </main>
    </div>
  );
};
