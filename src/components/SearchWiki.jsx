import React, { useState } from "react";
import axios from "axios";

const SearchWiki = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    try {
      const response = await axios.get(
        `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${value}&origin=*`
      );

      setSearchResults(response.data[1]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <input
        type="text"
        className="border p-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Buscar en Wikipedia"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        onClick={handleSearch}
      >
        Buscar
      </button>
      <ul className="mt-8 w-1/2">
        {searchResults?.map((result) => (
          <li key={result} className="mb-2 text-white">
            {result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchWiki;
