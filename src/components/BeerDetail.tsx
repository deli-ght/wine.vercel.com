import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { Beer } from "../types/Beer"
// import Image from "next/image";

interface BeerProps {
  beerdata: Beer
}

export const BeerDetail = ({ beerdata }: BeerProps) => {
  const { id, name, image, rating } = beerdata
  return (
    <Container>
      <h1>{name}</h1>
      <Reviews>
        <Review>평점 평균 : {rating.average?.toFixed(2)}</Review>
        <Review>리뷰 갯수 : {rating.reviews}</Review>
      </Reviews>
      {/* <Image src={image} alt={`${name}`} width={300} height={300} /> */}
    </Container>
  )
}

const wave = keyframes`
  from {
    transform : translateY(200px) rotate(0);
  }
  50% {
    transform : translateY(-100px) rotate(360deg);
  }
  to {
    transform : translateY(200px) rotate(0);
  }
`
const Container = styled.div`
  display: flex;
  position: relative;
  min-width: 300px;
  min-height: 300px;
  margin: 10px;
  padding: 50px;
  word-break: break-word;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
  &:hover::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 700px;
    height: 800px;
    border-radius: 40%;
    background: #f2b05e;
    animation: ${wave} 10s infinite;
    z-index: -1;
  }
  &:hover::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 800px;
    height: 700px;
    border-radius: 40%;
    background: rgba(242, 176, 94, 0.8);
    animation: ${wave} 10s infinite;
    z-index: -1;
  }
`

const Reviews = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  &::after {
    border-right: 1px solid black;
  }
`
const Review = styled.p`
  position: relative;
  padding: 10px;
  margin: -10px;
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
  text-align: right;
`
