import { BeerDetail } from "./BeerDetail";
import { useBeerData } from "../hooks/useBeerData";
import { Error, Loading } from "./index";
import { Beer } from "../types/Beer";

export const BeerList = ({ beername }: { beername: string }) => {
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
