import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Trending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingata();
  });

  const fetchTrendingata = async () => {
    const { responseData } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
    );

    console.log(responseData);
    setMovies(responseData.results);
  };
  fetchTrendingata();


  return (
    <>
      <div>Trending</div>
    </>
  );
};

export default Trending;
