import React, {useState} from "react";

function ListingCard({id, image, description, location, onDeleteListing}) {


  const[favoriteIcon, setFavoriteIcon] = useState(true)
  // const [listAction, setListAction] = useState({image, description, location})

  function handleClick(){
    setFavoriteIcon((favoriteIcon) => !favoriteIcon)
  }

  function handleDeleteClick(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE', 
    });
    onDeleteListing(id)
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {/* {favoriteIcon ? ( */}
           {/* <button onClick={handleClick} className="emoji-button favorite active">★</button> */}
          <button onClick={handleClick} className="emoji-button favorite active">{favoriteIcon ? "★" : "☆" }</button>

        {/* ) : ( */}
           {/* <button className="emoji-button favorite">☆</button> */}
        {/* )} */}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick}className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

// I can remove a listing from the page by clicking the trash can icon. This change should be persisted in the backend

export default ListingCard;
