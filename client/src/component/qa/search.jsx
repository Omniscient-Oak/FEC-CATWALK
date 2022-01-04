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
          'font-size': '18px',
          width: '50%',
          height: '30px',
          'box-sizing': 'border-box',
          border: 'none',
          'border-bottom': '2px solid',
        }}
      />
    </form>
  </div>
);

export default Search;
