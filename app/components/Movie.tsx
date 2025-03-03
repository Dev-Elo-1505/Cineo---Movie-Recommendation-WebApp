import axios from "axios";
import { useEffect, useState } from "react";

interface Movie {
    backdrop_path: string;
    poster_path: string;
  title: string;
  overview: string;
  id: number;
}

const api_Url = "https://api.themoviedb.org/3/movie/popular";
const api_Key = process.env.NEXT_PUBLIC_API_KEY;

const Movie = () => {
  const [movie, setMovie] = useState<Movie[]>([]);

  useEffect(() => {
    axios
      .get(`${api_Url}?api_key=${api_Key}`)
      .then((res) => {
        console.log(res.data)
        setMovie(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {movie.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Movie;
