import React from 'react';

const Search = ({ handleSearch }) => (
  <div>
    <form>
      <input
        type="text"
        name="search"
        onChange={handleSearch}
        placeholder="Have a question? Search for answers..."
        style={{
          fontSize: '18px',
          width: '50%',
          height: '30px',
          boxSizing: 'border-box',
          border: 'none',
          borderBottom: '2px solid',
        }}
      />
    </form>
  </div>
);

export default Search;
