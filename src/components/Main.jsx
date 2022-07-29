import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Request";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  console.log(movie);

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4"></div>
          <div>
            <button className="border bg-gray-300 text-black py-2 px-5 border-gray-300">
              Play
            </button>
            <button className="border border-gray-300 text-white py-2 px-5 ml-4">
              Watch later
            </button>
            <p className="text-gray-400 text-sm">
              Released: {movie?.release_date}
            </p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{movie?.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
