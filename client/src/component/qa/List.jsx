import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Search from './search.jsx';
import Question from './Question.jsx';
import AddQuestion from './AddQuestion.jsx';

const axios = require('axios');

const ListStyle = styled.section`
padding: 2em 10em 5em 10em;
justify-items: right;
font-family: Helvetica;
`;

const List = () => {
  const [questions, setQuestion] = useState([]);
  const [productId] = useState(63609);

  const [questionShowed, showMoreQuestions] = useState(4);
  const [showAllQuestions, setShowQuestions] = useState(false);

  const [isSearch, setSearch] = useState(false);
  const [filteredQuestions, setFilteredQuestion] = useState([]);

  const params = {
    product_id: productId,
    count: 500,
    page: 1,
  };

  const getData = () => {
    axios.get('/qa/questions', { params }).then(
      (res) => {
        setQuestion(res.data.results.sort((a, b) => (b.helpfulness - a.helpfulness)));
      },
    ).catch((err) => { throw err; });
  };

  useEffect(() => {
    getData();
  }, [productId]);

  const handleShowQuestions = () => {
    if (showAllQuestions) {
      showMoreQuestions(4);
    } else {
      showMoreQuestions(questions.length);
    }
    setShowQuestions(!showAllQuestions);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (event.target.value.length >= 3) {
      setSearch(true);
      setFilteredQuestion(questions.filter(
        (q) => q.question_body.toLowerCase().includes(event.target.value.toLowerCase()),
      ));
    } else {
      setSearch(false);
    }
  };

  return (
    <div id="qa">
      <ListStyle>
        <h3>QUESTIONS & ANSWERS</h3>
        <Search handleSearch={handleSearch} />
        <div style={{ maxHeight: '100%', overflow: 'auto' }}>
          {isSearch ? filteredQuestions.slice(0, questionShowed).map((q) => (
            <Question question={q} key={q.question_id} />
          )) : questions.slice(0, questionShowed).map((q) => (
            <Question question={q} key={q.question_id} />
          ))}
        </div>
        <div>
          {' '}
          {questions.length > 4 ? <button type="button" onClick={handleShowQuestions}>{showAllQuestions ? null : 'More Answered Questions'}</button> : null}
          {' '}
        </div>
        <AddQuestion productId={productId} />
      </ListStyle>
    </div>
  );
};

export default List;
