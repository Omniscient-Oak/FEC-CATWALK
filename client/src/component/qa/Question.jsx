import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Answer from './Answer.jsx';
import AddAnswer from './AddAnswer.jsx';

const ButtonStyle = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  &:hover{
    color: red;
}
`;

const MoreAnswersButton = styled.button`
  border: none;
  cursor: pointer;
  font-size: 15px;
  margin: 10px;
  font-style: italic;
  background-color: white;
  font-weight: bold;
  &:hover{
    color: blue;
}
`;

const Question = ({ question, productId }) => {
  const [answers, showMoreAnswers] = useState(2);
  const [showAllAnswers, setShowAnswers] = useState(false);

  const [helpful, markHelpful] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(question.question_helpfulness);
  const [reported, markReport] = useState(false);
  const [status, setStatus] = useState(question.reported);

  const [productName, setProductName] = useState('');

  const allAnswers = Object.entries(question.answers).map((ans) => ans[1]);

  const sortedAnswers = allAnswers.sort((a, b) => (b.helpfulness - a.helpfulness)).sort((a, b) => {
    if (a.answerer_name.toLowerCase() === 'seller') {
      return -1;
    } if (b.answerer_name.toLowerCase() === 'seller') {
      return 1;
    }
    return 0;
  });

  const handleShowAnswers = () => {
    if (showAllAnswers) {
      showMoreAnswers(2);
    } else {
      showMoreAnswers(sortedAnswers.length);
    }
    setShowAnswers(!showAllAnswers);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    if (!helpful && event.target.name === 'helpful') {
      axios.put(`http://localhost:3000/qa/questions/helpful?question_id=${question.question_id}`).then(() => {
        setHelpfulCount(helpfulCount + 1);
        markHelpful(true);
      }).catch((err) => console.log('handle question helpful error', err));
    } else if (!reported && event.target.name === 'report') {
      axios.put(`http://localhost:3000/qa/questions/report?question_id=${question.question_id}`).then(() => {
        markReport(true);
        setStatus(!status);
      }).catch((err) => console.log('handle question report error', err));
    }
  };

  axios.get(`http://localhost:3000/products/info/?product_id=${productId}`)
    .then((response) => {
      setProductName(response.data.name);
    })
    .catch((err) => {
      throw err;
    });

  return (
    <div>
      <br />
      <span>
        <div style={{ width: '70%' }}>
          <b>
            Q:
            {' '}
            {question.question_body}
            {' '}
          </b>
        </div>
        <span style={{ float: 'right', fontSize: '12px' }}>
          {' '}
&nbsp; &nbsp;Helpful?
          {' '}
          <ButtonStyle
            type="button"
            name="helpful"
            onClick={handleUpdate}
          >
            {' '}
            Yes
          </ButtonStyle>
          {`(${helpfulCount})`}
&nbsp; |  &nbsp;
          {reported ? 'Reported'
            : (
              <ButtonStyle
                type="button"
                name="report"
                onClick={handleUpdate}
              >
                {' '}
                Report
              </ButtonStyle>
            )}
          <AddAnswer
            productName={productName}
            questionId={question.question_id}
            questionBody={question.question_body}
          />
        </span>
      </span>
      <span>
        {sortedAnswers.slice(0, answers).map((ans) => (<Answer answer={ans} key={ans.id} />))}
      </span>
      &nbsp;&nbsp;&nbsp;
      {' '}
      {sortedAnswers.length > 2 ? (
        <MoreAnswersButton
          onClick={handleShowAnswers}
        >
          {showAllAnswers ? '--Collapse answers--' : '--See more answers--'}
        </MoreAnswersButton>
      ) : null}
    </div>
  );
};

export default Question;
