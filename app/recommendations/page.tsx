"use client";
import { useEffect, useState } from "react";
import MovieList, { Movie } from "../components/MovieList";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const RecommendationPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie",
          {
            params: {
              api_key: process.env.NEXT_PUBLIC_API_KEY,
              with_genres: searchParams.get("genre"),
              "vote_average.gte": searchParams.get("rating"),
              primary_release_year: searchParams.get("year"),
              with_original_language: searchParams.get("language"),
              sort_by: "vote_average.desc",
              include_adult: false,
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRecommendations();
  }, [searchParams]);

  return (
    <div>
      <h1>Your Recommendations</h1>
      {isLoading ? <p>Loading...</p> : <MovieList movies={movies} />}
    </div>
  );
};

export default RecommendationPage;
