import { WineDetail } from "./WineDetail";
import { useWineData } from "../hooks/useWineData";
import { Error, Loading } from "./index";
import { Wine } from "../types/Wine";

export const WineList = ({ winename }: { winename: string }) => {
  const { data, error } = useWineData(winename);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>{winename}</h1>
      <main>
        {data.map((wineData: Wine) => {
          return (
            <WineDetail key={`wine-id-${wineData.id}`} winedata={wineData} />
          );
        })}
      </main>
    </div>
  );
};
