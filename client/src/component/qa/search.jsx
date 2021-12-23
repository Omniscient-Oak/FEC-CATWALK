import React from 'react';


// find the key words of the Q or A when typing 3 or more chars.
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <form>
      <label>
        <input type="text" name="search" placeholder="Have a question? Search for answers..." />
      </label>
      <button type="submit"> search </button>

    </form>
      </div>
    );
  }
}

export default Search;
