import React, { useEffect, useState } from "react";

const Header = ({ onChange }) => {
  const [category, setCategory] = useState("");
  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    onChange(category);
  }, [category, onChange]);

  return (
    <div className="bg-emerald-300 h-40 flex flex-col justify-between item w-full">
      <h1 className="text-center text-2xl text-red-600 font-bold p-4">
        TVmaze
      </h1>
      <div className="flex justify-start items-center relative bg-green-200 w-full h-1/2">
        <div className="mx-4">
          <input
            className="mx-2"
            type="radio"
            name="radio"
            onChange={handleChange}
            value="people"
          />
          <label className="font-light">Actors</label>
        </div>
        <div className="mx-4">
          <input
            className="mx-2"
            name="radio"
            type="radio"
            onChange={handleChange}
            value="shows"
          />
          <label className="font-light">Shows</label>
        </div>
      </div>
    </div>
  );
};

export default Header;
