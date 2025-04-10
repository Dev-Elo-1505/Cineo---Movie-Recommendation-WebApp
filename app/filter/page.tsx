"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
interface Genre {
  id: number;
  name: string;
}

interface Language {
  iso_639_1: string;
  english_name: string;
}

const FilterFormPage = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [languages, setLanguages] = useState<Language[]>([]);
  const [filters, setFilters] = useState({
    genre: "",
    rating:"",
    year: "",
    language: "en",
  })
  const handleFilterChange=(e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>)=> {
    setFilters({...filters, [e.target.name]: e.target.value})
  }
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      )
      .then((res) => {
        console.log(res.data);
        setGenres(res.data.genres);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/configuration/languages?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((res) => {
        console.log(res.data);
        setLanguages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const date = new Date();
  const year = date.getFullYear();
  const sortedLanguages = [...languages]
    .filter((lang) => lang.english_name !== "English")
    .sort((a, b) => a.english_name.localeCompare(b.english_name));

  const englishLanguage = languages.find(
    (lang) => lang.english_name === "English"
  );
const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/recommendations?genre=${filters.genre}&rating=${filters.rating}&year=${filters.year}&language=${filters.language}`);
  }

  return (
    <form className="space-y-4 w-full max-w-6xl mx-auto flex flex-col" onSubmit={handleSubmit}>
      <h2 className="font-bold text-4xl">We can find your next watch!</h2>
      <label htmlFor="genre" className="font-semibold text-lg">Genre</label>
      <select name="genre" id="genre" className="bg-black/5 backdrop-blur-lg rounded p-2 focus:outline-none">
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
      <label htmlFor="rating" className="font-semibold text-lg">Rating</label>
      <input type="number" min={1} max={10} className="bg-black/5 backdrop-blur-lg rounded p-2 focus:outline-none" />
      <label htmlFor="year" className="font-semibold text-lg">Year</label>
      <input type="number" name="year" id="year" min={1970} max={year} className="bg-black/5 backdrop-blur-lg rounded p-2 focus:outline-none" />
      <label htmlFor="language" className="font-semibold text-lg">Language</label>
      <select
        name="language"
        id="language"
        defaultValue={englishLanguage?.iso_639_1}
        className="bg-black/5 backdrop-blur-lg rounded p-2 focus:outline-none"
      >
        {englishLanguage && (
          <option
            key={englishLanguage.iso_639_1}
            value={englishLanguage.iso_639_1}
          >
            {englishLanguage.english_name}
          </option>
        )}
        {sortedLanguages.map((lang) => (
          <option key={lang.iso_639_1} value={lang.iso_639_1}>
            {lang.english_name}
          </option>
        ))}
      </select>

      <button type="submit" className="bg-[#ff6c37] px-8 py-2 rounded text-[#ededed] hover:opacity-90 transition-opacity duration-300">Recommend</button>
    </form>
  );
};

export default FilterFormPage;
