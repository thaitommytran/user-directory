import React, { useState } from "react";
import data from "../data";
import "../styles/UserCard.css";

const UserCard = () => {
  const [index, setIndex] = useState(0);

  return (
    <div id="background">
      <div id="card-main">
        <h2 id="count">1/25</h2>
        <div id="card-data">
          <span>
            <h1 id="name">userFirstName userLastName</h1>
            <div id="line"></div>
          </span>
          <div id="details">
            <div className="info-container">
              <h3 className="user-info">From:</h3>
              <p>userCity, userCountry</p>
            </div>
            <div className="info-container">
              <h3 className="user-info">Job Title:</h3>
              <p>userTitle</p>
            </div>
            <div className="info-container">
              <h3 className="user-info">Employer:</h3>
              <p>userEmployer</p>
            </div>
          </div>
          <div id="movies">
            <h3 className="user-info">Favorite Movies:</h3>
            <p className="movie">1. userFavoriteMovies</p>
            <p className="movie">2. userFavoriteMovies</p>
            <p className="movie">3. userFavoriteMovies</p>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="nav-button">{"<"} Previous</button>
        <div id="edit-container">
          <button className="info-button">Edit</button>
          <button className="info-button">Delete</button>
          <button className="info-button">New</button>
        </div>
        <button className="nav-button">Next {">"}</button>
      </div>
    </div>
  );
};

export default UserCard;
