import axios from "axios";
import { useEffect, useState } from "react";
import { animate } from "motion";
import { motion } from "motion/react";

interface Movie {
  poster_path: string;
  title: string;
  release_date: string;
  id: number;
}

interface Prop {
  param: string;
}

const api_Url = "https://api.themoviedb.org/3/movie/";
const api_Key = process.env.NEXT_PUBLIC_API_KEY;

const MovieList = ({param}: Prop) => {
  const [movie, setMovie] = useState<Movie[]>([]);

  useEffect(() => {
    axios
      .get(`${api_Url}${param}?api_key=${api_Key}`)
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
      <motion.div className="flex gap-5 mx-auto">
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
      </motion.div>
    </div>
  );
};

export default MovieList;
