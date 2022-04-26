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
  { value: "100000", label: "$100K" },
  { value: "200000", label: "$200K" },
  { value: "300000", label: "$300K" },
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
  // const [selectedBed, setSelectedBed] = useState(null);
  // const [selectedBudget, setSelectedBudget] = useState(null);
  const [selectedProperties, setSelectedProperties] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  console.log(props.apiControl);

  // useEffect(() => {
  //   axios.get(
  //     `https://cher.app/look-around.json?search[points]=&search[search_type]=cities&search[search_in]=San Diego, CA, USA&search[minprice]=100000&search[maxprice]=800000&search[monthly_minprice]=&search[monthly_maxprice]=500&search[minbeds]=null&search[minbaths]=null&search[type][]=residential&search[type][]=condominium&search[type][]=mobilehome&search[type][]=multifamily&search[startdate]=&search[start_hour]=&search[start_minute]=&search[status][]=Active&search[status][]=Pending&search[minarea]=&search[maxarea]=&search[minyear]=&search[maxyear]=&search[minacres]=&search[maxacres]=&search[water]=false&search[maxdom]=&search[features]=&search[exteriorFeatures]=&commit=Search`
  //   );
  // }, [selectedBudget, selectedCity, selectedType]);

  const handleBudget = (e) => {
    const updatedBudget = { maxprice: e.value };
    props.setApiControl((apiControl) => ({ ...apiControl, ...updatedBudget }));
  };

  const handleBed = (e) => {
    const updatedBed = { minbeds: e.value };
    props.setApiControl((apiControl) => ({ ...apiControl, ...updatedBed }));
  };

  const handleType = (e) => {
    const updatedType = { type: e.value };
    props.setApiControl((apiControl) => ({ ...apiControl, ...updatedType }));
  };

  return (
    <div className="bg-blueish">
      <div className="container1 p-2">
        <div className="row mt-2">
          <div className="col-md-1"></div>

          <div className="col-md-3">
            <div>
              <Autocomplete
                style={{
                  background: "white",
                  height: "6vh",
                  padding: "5px 8px",
                }}
                apiKey="AIzaSyCSLSZ4uesQ-2Er85fECnQJ_5kuGteLrWY"
                onPlaceSelected={(place) => {
                  console.log(place);
                  const updatedPlace = { cities: place.formatted_address };
                  props.setApiControl((apiControl) => ({
                    ...apiControl,
                    ...updatedPlace,
                  }));
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
              value={budget.find((obj) => obj.value === props.apiControl.bed)}
              onChange={handleBudget}
            />
          </div>

          <div className="col-md-2">
            <Select
              placeholder={<div>Bed</div>}
              closeMenuOnSelect={false}
              components={animatedComponents}
              options={bed}
              value={bed.find((obj) => obj.value === props.apiControl.bed)}
              onChange={handleBed}
            />
          </div>

          <div className="col-md-2">
            <Select
              placeholder={<div>Type</div>}
              closeMenuOnSelect={false}
              components={animatedComponents}
              options={type}
              value={type.find((obj) => obj.value === props.apiControl.type)}
              onChange={handleType}
            />
          </div>

          <div className="col-md-2">
            <Filter
              name="More Filter"
              apiControl={props.apiControl}
              setApiControl={props.setApiControl}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBuyerTopNav;
