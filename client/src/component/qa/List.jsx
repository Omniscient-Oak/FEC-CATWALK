import React from 'react';
import Search from './Search';
import AddAnswer from './AddAnswer';


// the main app contains all the components of the Q&A

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="qa">
        <h3>QUESTIONS AND ANSWERS</h3>
        <Search />

      </div>
    );
  }
}

export default List;
