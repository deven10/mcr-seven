import React from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../data/Data";

export const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <h1>Welcome to Trip Advisor</h1>
      <h3>Top continents for your holiday</h3>
      <div className="continents-wrapper">
        {data.continents.map((continent) => (
          <div
            onClick={() => navigate(`/countries/${continent.name}`)}
            key={continent.id}
            className="continents"
          >
            <img src={continent.image} alt={continent.name} />
            <p>
              {" "}
              <img
                className="location"
                src="https://i.stack.imgur.com/t2EAB.png"
                alt=""
              />{" "}
              {continent.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
