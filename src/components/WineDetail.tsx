import { Wine } from "../types/Wine";

interface WineProps {
  winedata: Wine;
}

export const WineDetail = ({ winedata }: WineProps) => {
  const { id, wine, winery } = winedata;
  return (
    <div key={`port-wine-list-${id}`}>
      <h1>{wine}</h1>
      <p>{winery}</p>
    </div>
  );
};