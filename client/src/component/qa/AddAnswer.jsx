import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  justifyContent: center;
  display: flex;
  align-items: center;
`;

const Modal = styled.div`
  border-radius: 10px;
  background-color: black;
  color: white;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid;
  z-index: 100;
  width: 60%;
  height: 70%;
  overflow: auto;
`;

const ButtonStyle = styled.button`
  float: right;
  border: none;
  background-color: white;
  cursor: pointer;
  &:hover{
    color: red;
  }

`;

const CancelStyle = styled.button`
  margin-left: 50px;
  font-size: 15px;
  cursor: pointer;
`;

const AddAnswer = ({ productName, questionId, questionBody }) => {
  const [show, setShow] = useState(false);
  const [answer, setAnswer] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const validateEmail = (address) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(address);
  };

  const handleAddAnswer = ((event) => {
    event.preventDefault();
    if (event.target.name === 'answerBody') {
      setAnswer(event.target.value);
    } else if (event.target.name === 'nickname') {
      setName(event.target.value);
    } else if (event.target.name === 'email' && validateEmail(event.target.value)) {
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
    }).catch((err) => { console.log('post question error', err); });
  });

  return (
    <div>
      <ButtonStyle
        type="button"
        onClick={handleShow}
      >
        Add Answer
      </ButtonStyle>
      {show
        ? (
          <Container>
            <Modal>
              <form style={{ display: 'inline-block' }} onSubmit={postAnswer}>
                <h4 style={{ fontSize: '20px' }}>Submit your Answer</h4>
                <h5 style={{ fontSize: '12px' }}>
                  {productName}
                  :
                  {' '}
                  {questionBody}
                </h5>
                {answer.length <= 0 || name.length <= 0 || email.length <= 0 ? <p style={{ color: 'red', fontSize: '10px' }}>You must enter the followings:</p> : null}
                <p style={{ fontSize: '15px' }}>(1) Your Answer *</p>
                <textarea style={{ width: '80%', height: '15%' }} name="answerBody" maxLength="1000" required onChange={(e) => { handleAddAnswer(e); }} />
                <p style={{ fontSize: '15px' }}>(2) What is your nickname? *</p>
                <input style={{ width: '80%', height: '8%' }} maxLength="60" name="nickname" placeholder="Example: jack543!" required onChange={(e) => { handleAddAnswer(e); }} />
                <p style={{ fontSize: '10px' }}>For privacy reasons, do not use your full name or email address</p>
                <p style={{ fontSize: '15px' }}>(3) Your email *</p>
                <input style={{ width: '80%', height: '8%' }} maxLength="60" name="email" placeholder="Example: jack@email.com" required onChange={(e) => { handleAddAnswer(e); }} />
                <p style={{ fontSize: '10px' }}>For authentication reasons, you will not be emailed.</p>
                <button style={{ fontSize: '15px', cursor: 'pointer' }} type="submit">Submit</button>
                <CancelStyle
                  type="button"
                  onClick={handleClose}
                >
                  Cancel
                </CancelStyle>
              </form>
            </Modal>
          </Container>
        )
        : null}
    </div>
  );
};

export default AddAnswer;
