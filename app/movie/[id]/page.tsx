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
    <section>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
          alt={movie.title}
        />
      </div>
    </section>
  );
};

export default MovieDetailsPage;
