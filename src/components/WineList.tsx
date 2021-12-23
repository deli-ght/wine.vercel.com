import { WineDetail } from "./WineDetail";
import { useWineData } from "../hooks/useWineData";
import { Error, Loading } from "./index";
import { Wine } from "../types/Wine";

interface WineListProps {
  winename: string;
}
export const WineList = ({ winename }: WineListProps) => {
  const { data, error } = useWineData(winename);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>{winename}</h1>
      <main>
        {data.map((wineData: Wine) => {
          return (
            <WineDetail
              key={`${winename}-id-${wineData.id}`}
              winedata={wineData}
            />
          );
        })}
      </main>
    </div>
  );
};
