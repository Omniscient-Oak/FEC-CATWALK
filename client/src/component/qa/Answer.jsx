import React, { useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  &:hover{
    color: blue;
    text-decoration: underline;
  }
`;

const DivStyle = styled.div`
  width: 70%;
`;

const SpanStyle = styled.span`
  font-size: 13px;
  margin-top: 5px;
`;

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
      axios.put(`../../qa/answers/helpful?answer_id=${answer.id}`).then(() => {
        setHelpfulCount(helpfulCount + 1);
        markHelpful(true);
      }).catch((err) => console.log('handle answer helpful error', err));
    } else if (!reported && event.target.name === 'report') {
      axios.put(`../../qa/answers/report?answer_id=${answer.id}`).then(() => {
        markReport(true);
      }).catch((err) => console.log('handle answer report error', err));
    }
  };

  return (
    <div>
      <br />
      <DivStyle>
        <span>
          <b>A: </b>
          {' '}
          {answer.body}
        </span>
      </DivStyle>
      <SpanStyle>
&nbsp;&nbsp;&nbsp; by
        {' '}
        {isSeller ? <b>Seller</b> : answer.answerer_name}
        ,
        {moment(answer.date).format(' MMMM D, YYYY')}
        {' '}
&nbsp; | &nbsp;Helpful?
        {' '}
        <ButtonStyle name="helpful" onClick={handleUpdate}>
          {' '}
          Yes
        </ButtonStyle>
        {' '}
        {`(${helpfulCount})`}
&nbsp;| &nbsp;
        {reported ? 'Reported'
          : <ButtonStyle name="report" onClick={handleUpdate}> Report </ButtonStyle>}
      </SpanStyle>
      <br />
    </div>
  );
};

export default Answer;
