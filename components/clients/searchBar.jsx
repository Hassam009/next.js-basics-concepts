"use-client";
import React, { useState } from 'react'
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <form>
      <input 
        type="text" 
        placeholder="Search Here"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} 
      />
    </form>
  )
}

export default SearchBar
