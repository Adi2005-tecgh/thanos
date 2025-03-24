import React from 'react';

function SearchBar({ setSearchQuery }) {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="What would you like to shop for?"
        onChange={handleSearch}
      />
    </div>
  );
}
export default SearchBar;