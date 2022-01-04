import React, { useState } from 'react';
import moment from 'moment';
import axios from 'axios';

const Answer = ({ answer }) => {
  const [helpful, markHelpful] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(answer.helpfulness);
  const [reported, markReport] = useState(false);
  let isSeller = false;
  if (answer.answerer_name.toLowerCase() === 'seller') {
    isSeller = true;
  }

  const handleUpdate = (event) => {
    event.preventDefault();
    if (!helpful && event.target.name === 'helpful') {
      axios.put(`http://localhost:3000/qa/answers/helpful?answer_id=${answer.id}`).then(() => {
        setHelpfulCount(helpfulCount + 1);
        markHelpful(true);
      }).catch((err) => console.log('handle answer helpful error', err));
    } else if (!reported && event.target.name === 'report') {
      axios.put(`http://localhost:3000/qa/answers/report?answer_id=${answer.id}`).then(() => {
        markReport(true);
      }).catch((err) => console.log('handle answer report error', err));
    }
  };

  return (
    <div>
      <br />
      <div style={{ width: '70%' }}>
        <span>
          <b>A: </b>
          {' '}
          {answer.body}
        </span>
      </div>
      <span style={{ fontSize: '12px' }}>
&nbsp;&nbsp;&nbsp; by
        {' '}
        {isSeller ? <b>Seller</b> : answer.answerer_name}
        ,
        {moment(answer.date).format(' MMMM D, YYYY')}
        {' '}
&nbsp; | &nbsp;Helpful?
        {' '}
        <button type="button" name="helpful" onClick={handleUpdate}>
          {' '}
          Yes
        </button>
        {' '}
        {`(${helpfulCount})`}
&nbsp;| &nbsp;
        {reported ? 'Reported'
          : <button type="button" name="report" onClick={handleUpdate}> Report </button>}
      </span>
      <br />
    </div>
  );
};

export default Answer;
