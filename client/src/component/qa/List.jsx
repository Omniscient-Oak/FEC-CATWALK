import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Search from './search.jsx';
import Question from './Question.jsx';
import ProductContext from '../ProductContext';

const axios = require('axios');

const ListStyle = styled.section`
padding: 2em 10em 5em 10em;
justify-items: right;
font-family: Helvetica;
`;

const List = () => {
  const {productId} = useContext(ProductContext);
  const [questions, setQuestion] = useState([]);

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

  return (
    <div id="qa">
      <ListStyle>
        <h3>QUESTIONS & ANSWERS</h3>
        <Search />
        <div>
          {questions.map((q) => (
            <Question productId={productId} question={q} key={q.question_id} />
          ))}
        </div>
      </ListStyle>
    </div>
  );
};

export default List;