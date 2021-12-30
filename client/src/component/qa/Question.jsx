import React, {useState} from 'react';
import Answer from './Answer.jsx';


// handle single question
const Question = ({productId, question}) => {
  const [answers, showMoreAnswers] = useState(2);
  const [expandAll, setExpanded] = useState(false);
  const [helpful, markHelpful] = useState(false);

  let allAnswers = [];
  for (let key in question.answers) {
    allAnswers.push(question.answer[key]);
  }

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
      <p>
        <b>Q: {question.question_body} </b>

      </p>
      <p>
        {sortedAnswers.map((ans) => {
          return (<Answer answer={ans} key={ans.id}/>)
        })}
      </p>

    </div>

  );
};

export default Question;