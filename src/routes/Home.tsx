import { Carroussel } from "../components/Carroussel";
import { Emogi } from "../components/Emogi";
import { SearchBar } from "../components/SearchBar";
import { UserInfo } from "../components/UserInfo";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { API } from "../components/API";
import { Movie, UpcomingMovies } from "../types/api";
import { MoviesType } from "./Movies";

export async function movieLoader({params}:LoaderFunctionArgs){
  return API.buildArray()
  }

export function Home() {  
  const data = useLoaderData() as Movie[] 
  return (
    <div className="w-96 h-[667px] grid grid-rows-[1fr_1fr_1.5fr_0.5fr_3fr] gap-5">
      <div className="w-full text-white text-2xl flex justify-center items-center mt-5">
        <UserInfo name={""} image={""}></UserInfo>
      </div>
      <div className="w-full text-white text-2xl flex justify-center items-center">
        <SearchBar></SearchBar>
      </div>

      <div className="w-full flex justify-center items-center flex-col gap-5">
        <div className="flex flex-row w-80 justify-between">
          <div className="text-title text-white-dimmed">GENRE</div>
          <div className="">
            <a className="text-description text-yellow flex flex-row items-center gap-4" href="">
              <div>See all</div>
              <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              </div>
            </a>

          </div>
        </div>
        <div className="flex flex-row justify-between w-80">
          <a href=""><Emogi emojiName={"Romance"}></Emogi></a>
          <a href=""><Emogi emojiName={"Comedy"}></Emogi></a>
          <a href=""><Emogi emojiName={"Horror"}></Emogi></a>
          <a href=""><Emogi emojiName={"Drama"}></Emogi></a>
        </div> 
      </div>
      <div className="w-96 flex justify-center">
        <div className="w-80 flex text-title">Upcoming movies</div>
      </div>
      <div className="w-full text-title flex justify-start items-center flex-col">
        <div className="w-80">
          <Carroussel selection={data}></Carroussel>
          </div> 
      </div>
    </div>
  );
}