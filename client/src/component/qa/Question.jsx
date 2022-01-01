import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Answer from './Answer.jsx';

const auth = require('../../../../server/config.js');

const QuestionStyle = styled.div`
display: flex;
`;

const Question = ({ productId, question }) => {
  const [answers, showMoreAnswers] = useState(2);
  const [expandAll, setExpanded] = useState(false);
  const [helpful, markHelpful] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(question.question_helpfulness);
  const [reported, markReport] = useState(false);

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

  const handleUpdate = (event) => {
    event.preventDefault();
    const helpfulUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${question.question_id}/helpful`;
    const reportUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/answers/${question.question_id}/report`;

    if (!helpful && event.target.name === 'helpful') {
      const options = {
        method: 'put',
        url: helpfulUrl,
        headers: {
          Authorization: auth,
        },
      };

      axios(options).then(() => {
        setHelpfulCount(helpfulCount + 1);
        markHelpful(true);
      }).catch((err) => console.log('handle question helpful error', err));
    } else if (!reported && event.target.name === 'report') {
      const options = {
        method: 'put',
        url: reportUrl,
        headers: {
          Authorization: auth,
        },
      };

      axios(options).then(() => {
        markReport(true);
      }).catch((err) => console.log('handle question report error', err));
    }
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
          | &nbsp; Add An Answer
        </span>
      </span>
      <span>
        {sortedAnswers.map((ans) => (<Answer answer={ans} key={ans.id} />))}
      </span>
      <span>{sortedAnswers.length > 2 ? '--See More Answers--' : null }</span>
    </div>
  );
};

export default Question;
