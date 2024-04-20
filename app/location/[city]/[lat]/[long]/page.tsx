import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";
import { getClient } from "@apollo/client";

export const revalidate = 60;


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
      longitude: long,
      latitude: lat,
      timezone: "GMT",
    }
  })

  const results: Root = data.myQuery;

  const dataToSend = cleanData(results, city);


  return (
  <div>
    {/* <InformationPanel /> */}

    <div>
      <div className="p-5">
        <div className="pb-5">
          <h2 className="text-xl font-bold">Todays Overview</h2>
          <p className="text-sm text-gray-400">
            Last Updated at:{""}
          </p>
        </div>
      </div>
    </div>
  </div>);
}

export default Weatherpage