import React from 'react';

class QAList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div id='qa'>
        <h3>QUESTIONS AND ANSWERS</h3>
        <Search />

      </div>
    )
  }
}

export default QAList;