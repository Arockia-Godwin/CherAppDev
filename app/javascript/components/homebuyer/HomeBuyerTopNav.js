import React, { Component, useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import Autocomplete from "react-google-autocomplete";
import "bootstrap/dist/css/bootstrap.css";
import "../../../assets/stylesheets/components/_homebuyer.scss";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";
import Filter from "./morefilter/Filter";
const animatedComponents = makeAnimated();

const options = [
  { value: "Santa Monica", label: "Santa Monica" },
  { value: "Los Angeles", label: "Los Angeles" },
  { value: "California", label: "California" },
];
const budget = [
  { value: "$100K", label: "$100K" },
  { value: "$200K", label: "$200K" },
  { value: "$300K", label: "$300K" },
];

const bed = [
  { value: "1", label: "1Bed" },
  { value: "2", label: "2Bed" },
  { value: "3", label: "3Bed" },
];

const type = [
  { value: "Indvidual", label: "Indvidual" },
  { value: "Apartment", label: "Apartment" },
  { value: "Condonium", label: "Condonium" },
];

function HomeBuyerTopNav(props) {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedBed, setSelectedBed] = useState(null);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [selectedProperties, setSelectedProperties] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  console.log(selectedType);

  useEffect(() => {
    axios.get(
      `https://cher.app/look-around.json?search%5Bpoints%5D=&search%5Bsearch_type%5D=cities&search%5Bsearch_in%5D=San%20Diego%2C%20CA%2C%20USA&search%5Bminprice%5D=100000&search%5Bmaxprice%5D=800000&search%5Bmonthly_minprice%5D=&search%5Bmonthly_maxprice%5D=500&search%5Bminbeds%5D=null&search%5Bminbaths%5D=null&search%5Btype%5D%5B%5D=residential&search%5Btype%5D%5B%5D=condominium&search%5Btype%5D%5B%5D=mobilehome&search%5Btype%5D%5B%5D=multifamily&search%5Bstartdate%5D=&search%5Bstart_hour%5D=&search%5Bstart_minute%5D=&search%5Bstatus%5D%5B%5D=Active&search%5Bstatus%5D%5B%5D=Pending&search%5Bminarea%5D=&search%5Bmaxarea%5D=&search%5Bminyear%5D=&search%5Bmaxyear%5D=&search%5Bminacres%5D=&search%5Bmaxacres%5D=&search%5Bwater%5D=false&search%5Bmaxdom%5D=&search%5Bfeatures%5D=&search%5BexteriorFeatures%5D=&commit=Search`
    );
  }, [selectedBed, selectedBudget, selectedCity, selectedType]);

  const handleBudget = (e) => {
    setSelectedBudget(e.value);
  };

  const handleBed = (e) => {
    setSelectedBed(e.value);
  };

  const handleType = (e) => {
    setSelectedType(e.value);
  };

  return (
    <div className="bg-blueish">
      <div className="container1 p-2">
        <div className="row mt-2">
          <div className="col-md-1"></div>

          <div className="col-md-3">
            <div>
              <Autocomplete
                apiKey="AIzaSyCSLSZ4uesQ-2Er85fECnQJ_5kuGteLrWY"
                onPlaceSelected={(place) => {
                  console.log(place);
                }}
              />
            </div>
          </div>
          <div className="col-md-2">
            <Select
              placeholder={<div>Monthly Budget</div>}
              closeMenuOnSelect={false}
              components={animatedComponents}
              options={budget}
              value={budget.find((obj) => obj.value === selectedBudget)}
              onChange={handleBudget}
            />
          </div>

          <div className="col-md-2">
            <Select
              placeholder={<div>Bed</div>}
              closeMenuOnSelect={false}
              components={animatedComponents}
              options={bed}
              value={bed.find((obj) => obj.value === selectedBed)}
              onChange={handleBed}
            />
          </div>

          <div className="col-md-2">
            <Select
              placeholder={<div>Type</div>}
              closeMenuOnSelect={false}
              components={animatedComponents}
              options={type}
              value={type.find((obj) => obj.value === selectedType)}
              onChange={handleType}
            />
          </div>

          <div className="col-md-2">
            <Filter name="More Filter" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBuyerTopNav;
