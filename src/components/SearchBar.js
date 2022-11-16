import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ type, searchType, onClick, category }) => {
  const [searchString, setSearchString] = useState("");

  const searchHandler = (e) => {
    setSearchString(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setSearchString("");
  };

  const itemSearchHandle = async () => {
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/${category}?q=${searchString}`
    );
    return onClick(data);
  };
  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-row justify-center items-center bg-slate-300 h-32 w-full"
    >
      <input
        className=" mx-3 bg-white text-black border w-96 border-red-600 rounded-sm h-10 p-2 shadow-xl placeholder-gray-500 placeholder-opacity-100"
        type={type}
        value={searchString}
        placeholder={`Search ${searchType}`}
        onChange={searchHandler}
      />
      <button
        className="w-40 bg-blue-700 text-white font-extrabold rounded-sm h-10"
        onClick={itemSearchHandle}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
