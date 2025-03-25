"use client";

import { notFound, useParams } from "next/navigation";
import { Movie } from "@/app/components/MovieList";
import { useEffect, useState } from "react";
import axios from "axios";


const api_Url = "https://api.themoviedb.org/3/movie/";
const api_Key = process.env.NEXT_PUBLIC_API_KEY;

const MovieDetailsPage = ({ params }: { params: { id: string } }) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const param = useParams();
  const id = param.id as string;

  useEffect(() => {
    axios
      .get(`${api_Url}${id}?api_key=${api_Key}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!param.id) {
    return notFound();
  }

  if (!movie) return <p>Loading...</p>;

  return (
    <section className="flex gap-10 mt-10">
      
        

        
          <div className="w-1/4 rounded-lg">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="w-3/4">
            <h2 className="font-extrabold text-5xl">{movie.title}</h2>
            <ol className="flex gap-5 mt-5 font-bold">
                <li>Release Date: {movie.release_date}</li>
                <li>Rating: {movie.vote_average}</li>
            </ol>
            <div className="mt-10 font-semibold"><p>{movie.overview}</p></div>
          </div>
       
      
      <div></div>
    </section>
  );
};

export default MovieDetailsPage;
