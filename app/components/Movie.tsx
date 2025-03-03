import axios from "axios";
import { useEffect, useState } from "react";

interface Movie {
  poster_path: string;
  title: string;
  release_date: string;
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
        console.log(res.data);
        setMovie(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">What's Popular</h2>
      <div className="flex gap-5 flex-wrap mx-auto">
        {movie.map((movie) => (
          <div key={movie.id}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;
