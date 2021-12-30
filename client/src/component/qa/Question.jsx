import React, {useState} from 'react';
import Answer from './Answer.jsx';
import styled from 'styled-components';

const QuestionStyle = styled.div`
display: flex;

`;


// handle single question
const Question = ({productId, question}) => {
  const [answers, showMoreAnswers] = useState(2);
  const [expandAll, setExpanded] = useState(false);
  const [helpful, markHelpful] = useState(false);

  let allAnswers = Object.entries(question.answers).map((ans) => ans[1]);

  let sortedAnswers = allAnswers.sort((a, b) => (b.helpfulness - a.helpfulness)).sort((a, b) => { if (a.answerer_name.toLowerCase() === 'seller') {
    return -1;
  } else if (b.answerer_name.toLowerCase() === 'seller') {
    return 1;
  }
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
      <br></br>
      <br></br>
      <span>
        <b>Q: {question.question_body} </b>

      </span>
      <span>
        {sortedAnswers.map((ans) => {
          return (<Answer answer={ans} key={ans.id}/>)
        })}
      </span>

    </div>

  );
};

export default Question;