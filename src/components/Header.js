import React from "react";
import Search from "./Search";

function Header({setListingSearch, listingSearch }) {

  // console.log(listing)
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search listingSearch={listingSearch} setListingSearch={setListingSearch} />
    </header>
  );
}

export default Header;
