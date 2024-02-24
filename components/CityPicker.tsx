"use client";

import { Country, City } from 'country-state-city';;
import Select from "react-select";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { GlobeIcon } from "@heroicons/react/solid";

type option = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
} | null;

type cityOption = {
  value: {
    latitude: string;
    longitude: string;
    countryCode: string;
    name: string;
    stateCode: string;
  };
  label: string;
} | null;


const options = Country.getAllCountries().map(country => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));

function CityPicker() {
    const [selectedCountry, setSelectedCountry] = useState<option>(null);
    const [selectedCity, setSelectedCity] = useState<cityOption>(null);

    const router = useRouter();

    const handleSelectedCountry = (option: option) => {
      setSelectedCountry(option);
      setSelectedCity(null);
    };


  return (
    <div>
      <Select 
      className="text-black font-medium"
      value={selectedCountry}
      onChange={handleSelectedCountry}
      options={options} />
    </div>
  )
}

export default CityPicker