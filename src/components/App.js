import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const[listing, setListing] = useState([])
  const[listingSearch, setListingSearch] = useState("")


  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(repsonse => repsonse.json())
    .then(listData => setListing(listData))
  }, [])

  // console.log(listing)

  function deletelisting(listingId){
    const listingInfo = listing.filter((listings) => listings.id !== listingId)
    setListing(listingInfo)
    console.log(listingInfo)
  }

  return (
    <div className="app">
      <Header listingSearch={listingSearch} setListingSearch={setListingSearch} />
      <ListingsContainer listing={listing.filter(listings => listings.description.toLowerCase().includes(listingSearch.toLocaleLowerCase()))} onDeleteListing={deletelisting} />
    </div>
  );
}

export default App;
