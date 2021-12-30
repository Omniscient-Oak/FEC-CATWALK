import React, {useState, useEffect} from 'react';
import Search from './Search.jsx';
//import AddAnswer from './AddAnswer';
// import config from '../../../../server/config.js';
// import q from '../../../../server/controllers/qa.js';
import Question from './Question.jsx';
const axios = require('axios');


// the main app contains all the components of the Q&A
//getQuetions


const List = () => {

  const [questions, setQuestion] = useState([]);
  const [productId, setProductId] = useState(63609);

  let params = {
    product_id: productId,
    count: 500,
    page: 1
  };

  function getData() {
    axios.get('/qa/questions', {params: params}).then(
      (res) => {setQuestion(res.data.results.sort((a, b) => (b.helpfulness - a.helpfulness)));
      }).catch((err) => {throw err;})
  };

  useEffect(() => {
    getData();
    console.log('get all questions');
  }, [productId]);

  //console.log(questions);

    return (
      <div id="qa">
        <h3>QUESTIONS & ANSWERS</h3>
        <Search />
        <div>
        {questions.map(q => {
         //console.log(q);
         return (
         <Question productId={productId} question={q} key={q.question_id}/>
         );
        })}
        </div>


      </div>
    );

};

export default List;
