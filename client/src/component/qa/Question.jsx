import React, { useState } from 'react';
import styled from 'styled-components';
import Answer from './Answer.jsx';

const QuestionStyle = styled.div`
display: flex;
`;

const Question = ({ productId, question }) => {
  const [answers, showMoreAnswers] = useState(2);
  const [expandAll, setExpanded] = useState(false);
  const [helpful, markHelpful] = useState(false);

  const allAnswers = Object.entries(question.answers).map((ans) => ans[1]);

  const sortedAnswers = allAnswers.sort((a, b) => (b.helpfulness - a.helpfulness)).sort((a, b) => {
    if (a.answerer_name.toLowerCase() === 'seller') {
      return -1;
    } if (b.answerer_name.toLowerCase() === 'seller') {
      return 1;
    }
    return 0;
  });

  const expandAnswers = () => {
    if (expandAll) {
      setExpanded(2);
    } else {
      setExpanded(sortedAnswers.length);
    }
    setExpanded(!expandAll);
  };

  return (
    <div>
      <br />
      <br />
      <span>
        <b>
          Q:
          {' '}
          {question.question_body}
          {' '}
        </b>
        <span>
          {' '}
&nbsp; | &nbsp;Helpful? &nbsp;| &nbsp; Report
        </span>
      </span>
      <span>
        {sortedAnswers.map((ans) => (<Answer answer={ans} key={ans.id} />))}
      </span>
    </div>
  );
};

export default Question;
