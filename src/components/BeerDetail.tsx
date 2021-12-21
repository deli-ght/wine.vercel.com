import { Beer } from "../types/Beer";
import Image from "next/image";

interface BeerProps {
  beerdata: Beer;
}

export const BeerDetail = ({ beerdata }: BeerProps) => {
  const { id, name, image } = beerdata;
  return (
    <div>
      <h1>{name}</h1>
      {/* <Image src={`${image}`} alt={`${name}`} /> */}
    </div>
  );
};
