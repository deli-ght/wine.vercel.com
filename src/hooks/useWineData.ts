import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { WINE_API_ENDPOINT } from "../constants";

export const useWineData = (path: string) => {
  return useSWR(`${WINE_API_ENDPOINT}${path}`, fetcher);
};

// 데이터를 클라에서 불러오는 중
// export const { data, error } = useSWR(
//   "https://api.sampleapis.com/wines/port",
//   fetcher
// );
