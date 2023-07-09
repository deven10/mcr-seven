import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { data } from "../data/Data";

export const CountriesPage = () => {
  const navigate = useNavigate();
  const { continentSelected } = useParams();
  const selectedContinent = data?.continents?.find(
    (continent) => continent.name === continentSelected
  );

  return (
    <div className="countries-page">
      <h2>Top Countries in {continentSelected} for your next holiday</h2>
      <div className="continents-wrapper">
        {selectedContinent.countries.map((country) => (
          <div
            onClick={() => navigate(`/destinations/${country.name}`)}
            key={country.id}
            className="continents"
          >
            <img src={country.image} alt={country.name} />
            <p>
              {" "}
              <img
                className="location"
                src="https://i.stack.imgur.com/t2EAB.png"
                alt=""
              />{" "}
              {country.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
