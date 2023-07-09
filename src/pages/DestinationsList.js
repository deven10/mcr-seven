import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { data } from "../data/Data";

export const DestinationsList = () => {
  const navigate = useNavigate();
  const { countrySelected } = useParams();

  let destinationsList = [];
  for (let i = 0; i < data.continents.length; i++) {
    for (let j = 0; j < data.continents[i].countries.length; j++) {
      if (data.continents[i].countries[j].name === countrySelected) {
        destinationsList.push(...data.continents[i].countries[j].destinations);
      }
    }
  }

  return (
    <div className="countries-page">
      <h2>Top Destinations in {countrySelected} for your next holiday</h2>
      <div className="continents-wrapper">
        {destinationsList?.map((destination) => (
          <div
            onClick={() => navigate(`/destination/${destination.name}`)}
            key={destination.id}
            className="continents"
          >
            <img src={destination.image} alt={destination.name} />
            <p>
              {" "}
              <img
                className="location"
                src="https://i.stack.imgur.com/t2EAB.png"
                alt=""
              />{" "}
              {destination.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
