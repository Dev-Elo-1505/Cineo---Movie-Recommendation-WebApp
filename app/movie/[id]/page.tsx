// app/movie/[id]/page.tsx
import type { Metadata, ResolvingMetadata } from "next";
import MovieDetailsPage from "./MovieDetailsClient";

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const movie = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    ).then((res) => res.json());

    return {
      title: `${movie.title || 'Movie'} - Cineo`,
      description: movie.overview || 'Movie details page',
      openGraph: {
        images: movie.poster_path ? 
          [`https://image.tmdb.org/t/p/w500${movie.poster_path}`] : 
          [],
      },
    };
  } catch (error) {
    return {
      title: 'Movie Not Found - Cineo',
      description: 'The requested movie could not be found'
    };
  }
}

export default async function MoviePage({ params }: { params: { id: string } }) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    
    if (!response.ok) throw new Error('Movie not found');
    
    const movie = await response.json();
    return <MovieDetailsPage movie={movie} />;

  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-red-500">Movie not found</h1>
      </div>
    );
  }
}