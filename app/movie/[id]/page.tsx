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
    <section
    className="relative h-[90vh] bg-cover bg-center"
    style={{
      backgroundImage: movie?.backdrop_path
        ? `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
        : "none",
    }}
  >
    {/* Blurred Background Layer */}
    <div className="absolute inset-0 backdrop-blur-sm"></div>
  
    {/* Content */}
    <div className="relative z-10 flex items-center justify-center h-full text-white">
      <h1 className="text-4xl font-bold">{movie.title}</h1>
    </div>
  </section>
  

  );
};

export default MovieDetailsPage;
