import React from 'react';
import Search from './Search';


// the main app contains all the components of the Q&A

class QAList extends React.Component {
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

export default QAList;
