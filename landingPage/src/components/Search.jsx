import React, { useState } from "react";
import Google from "../assets/icons/google.png";
import SearchLogo from "../assets/icons/search.png";
export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      const url = `https://www.google.com/search?q=${encodeURIComponent(
        searchQuery
      )}`;
      window.location.href = url;
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="searchBar">
      <img src={SearchLogo} onClick={handleSearch} className="logo" alt="" />
      <input
        type="text"
        className="searchInput"
        placeholder="Search"
        autoComplete="false"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress} title="type the text"
      />
      <img src={Google} alt="" title="Google" />
    </div>
  );
}
