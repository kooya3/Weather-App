"use client";

import { Country, City } from 'country-state-city';import { useState } from 'react';
}
import Select from "react-select";

const options = Country.getAllCountries().map(country => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));

function CityPicker() {
    const [selectedCountry, setSelectedCountry] = useState<option>(null)
  return (
    <div>
      <Select options={options} />
    </div>
  )
}

export default CityPicker