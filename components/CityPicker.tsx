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

    const handleSelectedCity = (option: cityOption) => {
      setSelectedCity(option);
    
    }

  return (
  <div className="space-y-4">
    <div className="space-y-2">
    <div className="flex items-center space-x-2 text-white/80">
        <GlobeIcon className="h-5 w-5 text-white font-semibold " />
        <label htmlFor="country">Country</label>
      </div>
    <div>
      <Select 
      className="text-black font-medium"
      value={selectedCountry}
      onChange={handleSelectedCountry}
      options={options} />
  </div>

  <div className="space-y-2">
    <div className="flex items-center space-x-2 text-white/80">
        <GlobeIcon className="h-5 w-5 text-white font-semibold " />
        <label htmlFor="country">City</label>
      </div>
    <div>
      <Select 
      className="text-black font-medium"
      value={selectedCity}
      onChange={handleSelectedCity}
      options={options} />
  </div>  
  </div>
  </div>
</div>
  );
}

export default CityPicker;