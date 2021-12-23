import { BeerDetail } from "./BeerDetail";
import { useBeerData } from "../hooks/useBeerData";
import { Error, Loading } from "./index";
import { Beer } from "../types/Beer";
import styled from "@emotion/styled";
import { MEDIA_QUERY_END_POINT } from "../constants";

interface BeerListProps {
  beername: string;
}
export const BeerList = ({ beername }: BeerListProps) => {
  const { data, error } = useBeerData(beername);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <Container>
      <BeerName>{beername}</BeerName>
      <BeerCardContainer>
        {data.map((beerData: Beer) => {
          return (
            <BeerDetail
              key={`${beername}-id-${beerData.id}`}
              beerdata={beerData}
            />
          );
        })}
      </BeerCardContainer>
    </Container>
  );
};

const BeerName = styled.h1`
  padding-left: 20px;
  line-height: 180%;
  border-bottom: 1px solid #eee;
`;

const Container = styled.div`
  font-family: helvetica;
`;

const BeerCardContainer = styled.main`
  display: grid;
  @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
