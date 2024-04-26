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
  const client = getClient();
  
  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: "true",
      longitude: long,
      latitude: lat,
      timezone: "GMT",
    },
  });
  
  

    long } }: Props) {
  return (
   <div>
    Welcome to the weather page: {city} {lat} {long} 
   </div>    
    );
}


export default Weatherpage;