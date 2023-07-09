import React from "react";
import { useParams, Link } from "react-router-dom";
import { data } from "../data/Data";

export const DetailedDestination = () => {
  const { destinationName } = useParams();

  let destinationsSelected = {};
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
          destinationsSelected = {
            ...data.continents[i].countries[j].destinations[k],
          };
        }
      }
    }
  }

  console.log("destinationsSelected: ", destinationsSelected);

  return (
    <div className="countries-page">
      <h1>{destinationName}</h1>
      <div className="details-page">
        <img src={destinationsSelected.image} alt={destinationsSelected.name} />
        <div className="destination-details">
          <p>
            <span>Description:</span> {destinationsSelected.description}
          </p>
          <p>
            <span>Ratings:</span> {destinationsSelected.ratings}
          </p>
          <p>
            <span>Reviews:</span> {destinationsSelected.reviews}
          </p>
          <p>
            <span>Location:</span> {destinationsSelected.location}
          </p>
          <p>
            <span>Opening Hours:</span> {destinationsSelected.openingHours}
          </p>
          <p>
            <span>TIcket Price:</span> {destinationsSelected.ticketPrice}
          </p>
          <Link
            className="website"
            href={destinationsSelected.website}
            target="_blank"
          >
            Website
          </Link>
        </div>
      </div>
    </div>
  );
};
