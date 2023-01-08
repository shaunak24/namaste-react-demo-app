import React, { useState } from 'react';

const SearchBar = () => {
  const [searchText, setSearchText] = useState();

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className="search-btn">Search</button> {searchText}
    </div>
  );
};

export default SearchBar;
