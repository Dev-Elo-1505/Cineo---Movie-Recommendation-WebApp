"use client"

import Movie from "./components/Movie";
import NavBar from "./components/NavBar";

const apiUrl = process.env.NEXT_API_KEY;



export default function Home() {
  return (
    <div className="container mx-auto min-h-screen p-5 lg:px-20 lg:py-5">
      <NavBar />
      <Movie />
    </div>
  );
}
