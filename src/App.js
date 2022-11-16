import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Item from "./components/Item";
import ImageNotAvailable from "./assest/No_image_available.svg.png";

const App = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [category, setCategory] = useState("");
  const [error, setError] = useState(false);
  const categoryHandler = (type) => {
    setCategory(type);
  };

  const itemSearchHandler = (data) => {
    if (data.length > 0) {
      setError(false);
      setFetchedData(data);
    } else {
      setError(true);
      setFetchedData([]);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Header onChange={categoryHandler} />
      {category && (
        <SearchBar
          category={category}
          type="text"
          searchType={category}
          onClick={itemSearchHandler}
        />
      )}
      {error && <h1 className="mt-5">No data found.</h1>}
      <div className="grid grid-cols-3 gap-4 justify-center mx-10">
        {fetchedData[0] &&
          fetchedData[0].hasOwnProperty("person") &&
          fetchedData.map((item) => (
            <Item
              key={item.person.id && item.person.id}
              id={item.person.id && item.person.id}
              name={item.person.name && item.person.name}
              url={item.person.url && item.person.url}
              image={item.person.image ? item.person.image : ImageNotAvailable}
              country={item.person.country ? item.person.country.name : "N/A"}
            />
          ))}
      </div>
      <div className="grid grid-cols-4 gap-4 justify-center mx-10 mb-8">
        {fetchedData[0] &&
          fetchedData[0].hasOwnProperty("show") &&
          fetchedData.map((item) => (
            <Item
              key={item.show.id && item.show.id}
              id={item.show.id && item.show.id}
              url={item.show.url && item.show.url}
              name={item.show.name && item.show.name}
              image={item.show.image ? item.show.image : ImageNotAvailable}
              rating={
                item.show.rating.average ? item.show.rating.average : "N/A"
              }
              summary={item.show.summary ? item.show.summary : "N/A"}
            />
          ))}
      </div>
    </div>
  );
};

export default App;
