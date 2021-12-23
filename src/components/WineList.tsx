import { WineDetail } from "./WineDetail";
import { useWineData } from "../hooks/useWineData";
import { Error, Loading } from "./index";
import { Wine } from "../types/Wine";
import styled from "@emotion/styled";
import { MEDIA_QUERY_END_POINT } from "../constants";

interface WineListProps {
  winename: string;
}
export const WineList = ({ winename }: WineListProps) => {
  const { data, error } = useWineData(winename);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <main>
      <Container>{winename}</Container>
      <WineCardContainer>
        {data.map((wineData: Wine) => {
          return (
            <WineDetail
              key={`${winename}-id-${wineData.id}`}
              winedata={wineData}
            />
          );
        })}
      </WineCardContainer>
    </main>
  );
};

const Container = styled.h1`
  padding-left: 20px;
  line-height: 180%;
  border-bottom: 1px solid #eee;
`;

const WineCardContainer = styled.main`
  display: grid;
  @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
