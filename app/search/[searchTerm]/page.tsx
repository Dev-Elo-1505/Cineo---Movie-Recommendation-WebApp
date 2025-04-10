"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import MovieList, { Movie } from "@/app/components/MovieList";
const api_Url = "https://api.themoviedb.org/3/search/movie";
const api_Key = process.env.NEXT_PUBLIC_API_KEY;

const SearchPage = ({ params }: { params: { searchTerm: string } }) => {
  const searchTerm = params.searchTerm;
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    axios
      .get(
        `${api_Url}?api_key=${api_Key}&query=${searchTerm}&language=en-US&include_adult=false`
      )
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchTerm]);

  return (
    <div>
      {movies.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}
       <MovieList movies={movies} />
    </div>
  );
};

export default SearchPage;
