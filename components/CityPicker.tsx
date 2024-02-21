"use client";

import { Country, City } from 'country-state-city';}
import select from "react-select";

const options = Country.getAllCountries().map(country => ({
  
}))

function CityPicker = () => {
  return (
    <div>CityPicker</div>
  )
}

export default CityPicker