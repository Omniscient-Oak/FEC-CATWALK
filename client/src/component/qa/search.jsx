import React from 'react';
import styled from 'styled-components';

const SearchStyle = styled.input`
  font-size: 18px;
  width: 50%;
  height: 30px;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid;
`;

const Search = ({ handleSearch }) => (
  <div>
    <form>
      <SearchStyle
        type="text"
        name="search"
        onChange={handleSearch}
        placeholder="Have a question? Search for answers..."
      />
    </form>
  </div>
);

export default Search;
