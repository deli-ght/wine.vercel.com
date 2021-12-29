import { Wine } from "../../types/Wine"
import styled from "@emotion/styled"

interface WineProps {
  winedata: Wine
}

export const WineDetail = ({ winedata }: WineProps) => {
  const { id, wine, winery, image, rating } = winedata
  return (
    <Container>
      <WineImg src={image} alt={`${id}`}></WineImg>
      <h1>{wine}</h1>
      <p>{winery}</p>
      <Review color="#F2B05E">{rating.average}</Review>
      <Review color="#B3BF54">
        {rating.reviews.replace("ratings", "개의 리뷰")}
      </Review>
    </Container>
  )
}

const Container = styled.p`
  min-width: 300px;
  margin: 10px;
  padding: 50px;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`

const Review = styled.span`
  background: ${(props) => props.color};
  padding: 5px;
  margin: 5px;
  border-radius: 10px;
`

const WineImg = styled.img`
  height: 300px;
`
