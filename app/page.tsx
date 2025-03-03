"use client"

import Movie from "./components/Movie";
import NavBar from "./components/NavBar";

const apiUrl = process.env.NEXT_API_KEY;



export default function Home() {
  return (
    <div className="container mx-auto min-h-screen">
      <NavBar />
      <Movie />
    </div>
  );
}
