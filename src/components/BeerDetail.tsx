import { Beer } from "../types/Beer";
// import Image from "next/image";

interface BeerProps {
  beerdata: Beer;
}

export const BeerDetail = ({ beerdata }: BeerProps) => {
  const { id, name, image, rating } = beerdata;
  return (
    <div>
      <h1>{name}</h1>
      <p>평점 평균 : {rating.average.toFixed(2)}</p>
      <p>리뷰 갯수 : {rating.reviews}</p>
      {/* <Image src={`${image}`} alt={`${name}`} /> */}
    </div>
  );
};
