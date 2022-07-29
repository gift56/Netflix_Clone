import axios from "axios";
import React, { useEffect, useState } from "react";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchUrl]);

  console.log(movies);
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div id={"slider"}>
          {movies.map((item, id) => (
            <div
              key={id}
              className="relative p-2 inline-block cursor-pointer w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 text-white"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
