import React, {useState, useEffect} from 'react';
import moment from 'moment';
import styled from 'styled-components';

const AnswerStyle = styled.div`
display: flex;
`;

const Answer = ({answer}) => {
  const [helpful, markHelpful] = useState(false);
  let isSeller = false;
  if (answer.answerer_name.toLowerCase() === 'seller') {
    isSeller = true;
  }

  return (
    <div>
      <br></br>
      <span>
        <b>A: </b> {answer.body}
      </span>
      <span>
        {isSeller ? 'by ' + answer.answerer_name + '- Seller' : 'by ' + answer.answerer_name },
        {moment(answer.date).format(' MMMM D, YYYY')
        } &nbsp; | &nbsp;Helpful? &nbsp;| &nbsp; Report
      </span>
      <br/>
    </div>
  );
};

export default Answer;