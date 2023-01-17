import axios from "axios";
import { Movie } from "../types/api";

export const API = {
  buildArray: async () => {
    let returnArray: Movie[] = [];
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=5de0d3a9c085fde70b8c91f6f6a927f3"
      )
      .then((res) => {
        returnArray = res.data.results;
      });
    return returnArray;
  },
  searchResult: async (input: string) => {
    await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=5de0d3a9c085fde70b8c91f6f6a927f3&query=${input}`
      )
      .then((res) => {
        console.log(res.data);
      });
  },
};
