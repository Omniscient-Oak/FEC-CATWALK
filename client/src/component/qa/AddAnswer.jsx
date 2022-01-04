import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
// position: fixed;
// z-index: 100;
width: 60vw;
height: 80vh;
justifyContent: center;
backgroundColor: rgba(0, 0, 0, 0.5);
display: flex;
justify-content: center;
align-items: center;
color: black;
`;

const AddAnswer = ({ productName, questionId, questionBody }) => {
  const [show, setShow] = useState(false);
  const [answer, setAnswer] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddAnswer = ((event) => {
    event.preventDefault();
    if (event.target.name === 'answerBody') {
      setAnswer(event.target.value);
    } else if (event.target.name === 'nickname') {
      setName(event.target.value);
    } else if (event.target.name === 'email') {
      setEmail(event.target.value);
    }
  });
  const postAnswer = (() => {
    const newAnswer = {
      body: answer,
      name,
      email,
    };
    axios.post(`http://localhost:3000/qa/questions/answers?question_id=${questionId}`, newAnswer).then(() => {
      console.log('sent');
    }).catch((err) => { console.log('post question error', err); });
  });

  return (
    <div>
      <button type="button" onClick={handleShow} style={{ float: 'right', border: 'none' }}>Add Answer</button>
      {show
        ? (
          <Container>

            <h4>Submit your Answer</h4>

            <form onSubmit={postAnswer}>
              <h5>
                {productName}
                :
                {' '}
                {questionBody}
              </h5>
              <p>(1) Your Answer *</p>
              <textarea name="answerBody" maxLength="1000" required onChange={(e) => { handleAddAnswer(e); }} />
              <p>(2) What is your nickname? *</p>
              <input maxLength="60" name="nickname" placeholder="Example: jack543!" required onChange={(e) => { handleAddAnswer(e); }} />
              <p>For privacy reasons, do not use your full name or email address</p>
              <p>(3) Your email *</p>
              <input maxLength="60" name="email" placeholder="Example: jack@email.com" required onChange={(e) => { handleAddAnswer(e); }} />
              <p>For authentication reasons, you will not be emailed.</p>
              <button type="submit">Submit</button>
              <button type="button" onClick={handleClose}>Cancel</button>
            </form>
          </Container>
        )
        : null}
    </div>
  );
};

export default AddAnswer;

// rgba(183, 178, 176, 0.4);
