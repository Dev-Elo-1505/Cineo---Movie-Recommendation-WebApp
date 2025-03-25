import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";
import debounce from "lodash.debounce";

const SearchBar = ({ isMobile }: { isMobile?: boolean }) => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  const updateSearch = useCallback(
    debounce((value) => {
      setSearch(value);
    }, 300),
    []
  );

  return (
    <form
      className={`mt-2 flex items-center space-x-2 w-full lg:w-2/3 rounded p-3 transition-all ${
        isMobile
          ? "bg-transparent"
          : "bg-black/5 backdrop-blur-lg dark:bg-[#1d1d1d] dark:backdrop-blur-none"
      }`}
      onSubmit={handleSubmit}
    >
      <button className="disabled:text-gray-500" disabled={!search}>
        <IoSearchOutline className="text-2xl cursor-pointer" />
      </button>
      <input
        type="text"
        placeholder="Find something great"
        className="w-full focus-none outline-none bg-transparent"
        onChange={(e) => updateSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
