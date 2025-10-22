import React, { useEffect, useRef, useState } from "react";
import cards_data from "../../assets/cards/Cards_data";
import "./titlecards.css";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTlkZTZhZmE1ZWNjZjQ2ZjBkZTNkOGUxYWQ2Yjg1MyIsIm5iZiI6MTc1OTA1NjA1NC45MjcsInN1YiI6IjY4ZDkxMGI2NDMwNjE5YWY0NDM4YmEyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7mSBS62rmaSwiDOUOpEtQLqs6Kt7zOqTDjQL4USsOwg",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);
  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={card.id}>
              <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
