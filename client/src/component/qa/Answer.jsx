import React, {useState, useEffect} from 'react';
import moment from 'moment';
import styled from 'styled-components';

const AnswerStyle = styled.div`
display: flex;

`;


// handle single answer
const Answer = ({answer}) => {
  const [helpful, markHelpful] = useState(false);

  let isSeller = false;
  if (answer.answerer_name.toLowerCase() === 'seller') {
    isSeller = true;
  }

  return (
    <div>
      <p>
        <b>A: </b> {answer.body}
      </p>
      <p>
      {isSeller? 'by ' + answer.answerer_name + '- Seller' : 'by ' + answer.answerer_name},
      {moment(answer.date).format('MMMM D, YYYY')
      }   |   Helpful?   |   Report
      </p>

    </div>
  );
};

export default Answer;