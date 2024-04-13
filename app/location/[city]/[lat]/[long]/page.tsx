import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";
import { getClient } from "@apollo/client";

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  }
}

function Weatherpage({params: {city, lat, long}}: Props) {
  const client = getClient();

  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: "true",
    }
  })
  return <div>Welcome to the weather page: {city} {lat} {long}</div>;
}

export default Weatherpage