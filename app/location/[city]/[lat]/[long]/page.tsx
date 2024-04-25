import { getClient } from "@/apollo-client";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  }
}

async function WeatherPage({ params: { city, lat, long } }: Props) {
  

  function Weatherpage({ params: { city, lat, long } }: Props) {
  return (
   <div>
    Welcome to the weather page: {city} {lat} {long} 
   </div>    
    );
}


export default Weatherpage;