import axios from "axios";
import { IRankingItem } from "../types/movieRank";

export const getMovieRanking = async (): Promise<IRankingItem[]> => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const year = yesterday.getFullYear();
  const month = ("0" + (yesterday.getMonth() + 1)).slice(-2);
  const day = ("0" + yesterday.getDate()).slice(-2);
  try {
    const res = await axios.get(
      `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.NEXT_PUBLIC_KOBIS_KEY}&targetDt=${year}${month}${day}`
    );
    const data = res.data.boxOfficeResult.dailyBoxOfficeList;
    return data;
  } catch (err) {
    throw new Error(`${err}`);
  }
};
