"use client";
import axios from "axios";
import NavBar from "./ui/NavBar";

const apiUrl = process.env.NEXT_API_KEY;

const getMovie = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiUrl}`
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen">
      <NavBar />
      
    </div>
  );
}
