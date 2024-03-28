type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  }
}

function Weatherpage({params: {}}) {
  return <div>Welcome to the weather page</div>;
}

export default Weatherpage