import React, {useState, useEffect} from 'react';
import Search from './Search.jsx';
//import AddAnswer from './AddAnswer';
// import config from '../../../../server/config.js';
// import q from '../../../../server/controllers/qa.js';
import axios from 'axios';


// the main app contains all the components of the Q&A
//getQuetions


const List = () => {

  const [questions, setQuestion] = useState([]);
  const [productId, setProductId] = useState(63609);

  let params = {
    product_id: productId
  }
  useEffect(() => {
    axios.get('/qa/questions', {params: params}).then(
      (res) => {setQuestion(res.data.results);
      }).catch((err) => {throw err;})
  }, []);

  //console.log(questions);



    return (
      <div id="qa">
        <h3>QUESTIONS & ANSWERS</h3>
        <Search />
        <div>

        {questions.map(entry => {
          console.log(entry);
          <p>Q: <span>{entry.question_body}</span></p>
        })}
        </div>


      </div>
    );

};

export default List;
