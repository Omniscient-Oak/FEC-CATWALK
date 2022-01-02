import React from 'react';

const Search = ({ handleSearch }) => (
  <div>
    <form>
      <input type="text" name="search" onChange={handleSearch} placeholder="Have a question? Search for answers..." />
    </form>
  </div>
);

export default Search;
