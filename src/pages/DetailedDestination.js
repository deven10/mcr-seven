import React from "react";
import { useParams, Link } from "react-router-dom";
import { data } from "../data/Data";

export const DetailedDestination = () => {
  const { destinationName } = useParams();

  let destinationSelected = {};
  for (let i = 0; i < data.continents.length; i++) {
    for (let j = 0; j < data.continents[i].countries.length; j++) {
      for (
        let k = 0;
        k < data.continents[i].countries[j].destinations.length;
        k++
      ) {
        if (
          data.continents[i].countries[j].destinations[k].name ===
          destinationName
        ) {
          destinationSelected = {
            ...data.continents[i].countries[j].destinations[k],
          };
        }
      }
    }
  }

  return (
    <div className="countries-page">
      <h1>{destinationName}</h1>
      <div className="details-page">
        <img src={destinationSelected.image} alt={destinationSelected.name} />
        <div className="destination-details">
          <p>
            <span>Description:</span> {destinationSelected.description}
          </p>
          <p>
            <span>Ratings:</span> {destinationSelected.ratings}
          </p>
          <p>
            <span>Reviews:</span> {destinationSelected.reviews}
          </p>
          <p>
            <span>Location:</span> {destinationSelected.location}
          </p>
          <p>
            <span>Opening Hours:</span> {destinationSelected.openingHours}
          </p>
          <p>
            <span>TIcket Price:</span> {destinationSelected.ticketPrice}
          </p>
          <Link
            className="website"
            to={destinationSelected.website}
            target="_blank"
          >
            Website
          </Link>
        </div>
      </div>
    </div>
  );
};
