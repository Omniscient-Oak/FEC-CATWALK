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
  font-weight : bold;
  &:hover{
    color: blue;
    text-decoration: underline;
  }
`;

const FormStyle = styled.form`
  display: inline-block;
`;

const Title = styled.h4`
  font-size: 20px;
`;

const Subtitle = styled.h5`
  font-size: 12px;
`;

const WarningStyle = styled.p`
  color: red;
  font-size: 10px;
`;

const TextStyle = styled.p`
  font-size: 15px;
`;

const AnswerInputStyle = styled.textarea`
  width: 80%;
  height: 15%;
`;

const InputStyle = styled.input`
  width: 80%;
  height: 8%;
`;

const ContentStyle = styled.p`
  font-size: 10px;
`;

const SubmitStyle = styled.button`
  font-size: 15px;
  cursor: pointer;
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
    axios.post(`../../qa/questions/answers?question_id=${questionId}`, newAnswer).then(() => {
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
              <FormStyle onSubmit={postAnswer}>
                <Title>Submit your Answer</Title>
                <Subtitle>
                  {productName}
                  :
                  {' '}
                  {questionBody}
                </Subtitle>
                {answer.length <= 0 || name.length <= 0 || email.length <= 0
                  ? <WarningStyle>You must enter the followings:</WarningStyle> : null}
                <TextStyle>(1) Your Answer *</TextStyle>
                <AnswerInputStyle name="answerBody" maxLength="1000" required onChange={(e) => { handleAddAnswer(e); }} />
                <TextStyle>(2) What is your nickname? *</TextStyle>
                <InputStyle maxLength="60" name="nickname" placeholder="Example: jack543!" required onChange={(e) => { handleAddAnswer(e); }} />
                <ContentStyle>
                  For privacy reasons, do not use your full name or email address
                </ContentStyle>
                <TextStyle>(3) Your email *</TextStyle>
                <InputStyle maxLength="60" name="email" placeholder="Example: jack@email.com" required onChange={(e) => { handleAddAnswer(e); }} />
                <ContentStyle>For authentication reasons, you will not be emailed.</ContentStyle>
                <SubmitStyle type="submit">Submit</SubmitStyle>
                <CancelStyle
                  type="button"
                  onClick={handleClose}
                >
                  Cancel
                </CancelStyle>
              </FormStyle>
            </Modal>
          </Container>
        )
        : null}
    </div>
  );
};

export default AddAnswer;
