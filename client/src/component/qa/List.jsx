import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import {
  LaughSquint,
} from '@styled-icons/fa-solid';
import Search from './search.jsx';
import Question from './Question.jsx';
import ProductContext from '../ProductContext';
import AddQuestion from './AddQuestion.jsx';
import { getQuestions } from '../../serverCalls';

const ListStyle = styled.section`
  padding: 2em 10em 5em 10em;
  justify-items: right;
  font-family: sans-serif;
`;

const DivStyle = styled.div`
  max-height: 100%;
  overflow: auto;
`;

const MoreQuestionsButton = styled.button`
  height: 40px;
  width: 200px;
  background-color: white;
  margin: 10px;
  font-size: 15px;
  border-radius: 10px;
  cursor: pointer;
  font-weight : bold;
  &:hover{
    color: white;
    background: crimson;
    opacity: 90%;
}
`;
const Title = styled.div`
  padding: 10px 30px 10px 500px;
  background: crimson;
  width: max;
  color: white;
  font-size: 40px;
  font-variant: all-small-caps;
  font-family: sans-serif;
  opacity: 90%;
`;
const IconDisplay = styled.div`
  display: inline-grid;
  height: 22px;
  width: 22px;
  margin: 0px 5px 0px 5px;
  &:hover {
    color: teal;
  }
`;

const List = () => {
  const { productId } = useContext(ProductContext);
  const [questions, setQuestion] = useState([]);
  const [questionShowed, showMoreQuestions] = useState(4);
  const [showAllQuestions, setShowQuestions] = useState(false);
  const [isSearch, setSearch] = useState(false);
  const [filteredQuestions, setFilteredQuestion] = useState([]);

  const params = {
    product_id: productId,
    count: 1000,
    page: 1,
  };

  const getData = () => {
    getQuestions(params).then(
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

      <Title>
        QUESTIONS & ANSWERS (
        {questions.length}
        )
        <IconDisplay>
          <LaughSquint />
        </IconDisplay>

      </Title>
      <ListStyle>
        <Search handleSearch={handleSearch} />
        <DivStyle>
          {isSearch ? filteredQuestions.slice(0, questionShowed).map((q) => (
            <Question question={q} productId={productId} key={q.question_id} />
          )) : questions.slice(0, questionShowed).map((q) => (
            <Question question={q} productId={productId} key={q.question_id} />
          ))}
        </DivStyle>
        <div>
          {' '}
          {questions.length > 4 ? <MoreQuestionsButton onClick={handleShowQuestions}>{showAllQuestions ? 'Show Less' : 'More Answered Questions'}</MoreQuestionsButton> : null}
          {' '}
        </div>
        <AddQuestion productId={productId} />
      </ListStyle>
    </div>
  );
};

export default List;
