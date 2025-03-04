import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

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
  const scrollRef = useRef(null)
  const { scrollXProgress } = useScroll({ container: scrollRef });

  const x = useTransform(scrollXProgress, [0, 1], ["0%", "-50%"]);

  useEffect(() => {
    axios
      .get(`${api_Url}${param}?api_key=${api_Key}`)
      .then((res) => {
        setMovie(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [param]);
  return (
    <div className="w-full overflow-hidden">
       <div ref={scrollRef} className="relative w-full overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide">
      <motion.div style={{ x }} className="flex gap-5 mx-auto w-max p-4">
        {movie.map((movie) => (
          <div key={movie.id} className="w-48">
            <div className="w-full rounded-lg shadow-lg">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full rounded-lg shadow-lg object-cover"
              />
            </div>
            <h3 className="text-sm mt-2 font-semibold">{movie.title}</h3>
            <p className="text-xs text-gray-500">{movie.release_date}</p>
          </div>
        ))}
      </motion.div>
    </div>
    </div>
   
  );
};

export default MovieList;
