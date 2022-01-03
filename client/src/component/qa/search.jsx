import React from 'react';

const Search = ({ handleSearch }) => (
  <div>
    <form>
      <input type="text" name="search" onChange={handleSearch} placeholder="Have a question? Search for answers..." style={{ width: '50%', height: '30px' }} />
    </form>
  </div>
);

export default Search;
