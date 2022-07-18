import React, { useState } from "react";
import data from "../data";
import "../styles/UserCard.css";

const UserCard = () => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const user = data[index];

  const newUser = {
    id: data.length + 1,
    name: {
      first: "",
      last: ""
    },
    city: "",
    country: "",
    employer: "",
    title: "",
    favoriteMovies: ["", "", ""]
  };

  const next = () => {
    if (index === data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const previous = () => {
    if (index === 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const deleteUser = () => {
    if (index === 0) {
      data.splice(index, 1);
      setIndex(index.length - 1);
    } else {
      data.splice(index, 1);
      setIndex(index - 1);
    }
  };

  const addUser = (e) => {
    e.preventDefault();
    data.push(newUser);
    setShow(!show);
    setIndex(data.length - 1);
  };

  const handleChange = (e) => {
    let key = e.target.name;
    newUser[key] = e.target.value;
  };

  const handleNameChange = (e) => {
    let key = e.target.name;
    newUser.name[key] = e.target.value;
  };

  const handleMovieChange = (e) => {
    let index = e.target.name;
    newUser.favoriteMovies[index] = e.target.value;
  };

  const showForm = () => {
    setShow(!show);
  };

  return (
    <div id="background">
      <div id="card-main">
        <form className={show ? "user-form" : "hide-form"}>
          <p>
            First Name: <input name="first" onChange={handleNameChange} />
          </p>
          <p>
            Last Name: <input name="last" onChange={handleNameChange} />
          </p>
          <p>
            City: <input name="city" onChange={handleChange} />
          </p>
          <p>
            Country: <input name="country" onChange={handleChange} />
          </p>
          <p>
            Job Title: <input name="title" onChange={handleChange} />
          </p>
          <p>
            Employer: <input name="employer" onChange={handleChange} />
          </p>
          <h3>Favorite Movies:</h3>
          <p>
            1: <input name="0" onChange={handleMovieChange} />
          </p>
          <p>
            2: <input name="1" onChange={handleMovieChange} />
          </p>
          <p>
            3: <input name="2" onChange={handleMovieChange} />
          </p>
          <button onClick={addUser}>Add User</button>
        </form>
        <h2 id="count">
          {index + 1}/{data.length}
        </h2>
        <div id="card-data">
          <span>
            <h1 id="name">
              {user.name.first} {user.name.last}
            </h1>
            <div id="line"></div>
          </span>
          <div id="details">
            <div className="info-container">
              <h3 className="user-info">From:</h3>
              <p>
                {user.city}, {user.country}
              </p>
            </div>
            <div className="info-container">
              <h3 className="user-info">Job Title:</h3>
              <p>{user.title}</p>
            </div>
            <div className="info-container">
              <h3 className="user-info">Employer:</h3>
              <p>{user.employer}</p>
            </div>
          </div>
          <div id="movies">
            <h3 className="user-info">Favorite Movies:</h3>
            <p className="movie">1. {user.favoriteMovies[0]}</p>
            <p className="movie">2. {user.favoriteMovies[1]}</p>
            <p className="movie">3. {user.favoriteMovies[2]}</p>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="nav-button" onClick={previous}>
          {"<"} Previous
        </button>
        <div id="edit-container">
          <button className="info-button">Edit</button>
          <button className="info-button" onClick={deleteUser}>
            Delete
          </button>
          <button className="info-button" onClick={showForm}>
            New
          </button>
        </div>
        <button className="nav-button" onClick={next}>
          Next {">"}
        </button>
      </div>
    </div>
  );
};

export default UserCard;
