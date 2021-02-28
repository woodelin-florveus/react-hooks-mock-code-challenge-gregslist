import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listing, onDeleteListing}) {

// id: 1, description: "heater", image: "./images/heater.jpg", location: "BROOKLYN"

  const listingList = listing.map(({id, description, image, location}) => {
    return(
      <ListingCard 
      key={id}
      id={id}
      description={description}
      image={image}
      location={location}
      onDeleteListing={onDeleteListing}
      />
    )
  })
  
  return (
    <main>
      <ul className="cards">
        {listingList}
      </ul>
    </main>
  );
}

export default ListingsContainer;
