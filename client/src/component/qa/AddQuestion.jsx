import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ProductContext from '../ProductContext';

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

const AddButton = styled.button`
  height: 40px;
  width: 200px;
  background-color: white;
  font-weight : bold;
  margin: 10px;
  font-size: 15px;
  border-radius: 10px;
  cursor: pointer;
  &:hover{
    color: white;
    background: crimson;
    opacity: 90%;
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

const QuestionTextStyle = styled.p`
  font-size: 15px;
`;

const QuestionInputStyle = styled.textarea`
  width: 80%;
  height: 15%;
`;

const InputStyle = styled.input`
  width: 80%;
  height: 8%;
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

const ContentStyle = styled.p`
  font-size: 10px;
`;

const AddQuestion = ({ productId }) => {
  const [show, setShow] = useState(false);
  const [productName, setProductName] = useState('');
  const [question, setQuestion] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const productContext = useContext(ProductContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setProductName(productContext.productInfo.name);
  }, [productContext.productInfo]);

  const validateEmail = (address) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(address);
  };

  const handleAddQuestion = ((event) => {
    event.preventDefault();
    if (event.target.name === 'questionBody') {
      setQuestion(event.target.value);
    } else if (event.target.name === 'nickname') {
      setName(event.target.value);
    } else if (event.target.name === 'email' && validateEmail(event.target.value)) {
      setEmail(event.target.value);
    }
  });

  const handleSubmit = (() => {
    const newQuestion = {
      body: question,
      name,
      email,
      product_id: Number(productId),
    };

    axios.post('../../qa/questions', newQuestion).then(() => {
    }).catch((err) => { console.log('post question error', err); });
  });

  return (
    <div>
      <AddButton onClick={handleShow}> Add A Question + </AddButton>
      {show
        ? (
          <Container>
            <Modal>
              <FormStyle onSubmit={handleSubmit}>
                <Title>Ask Your Question</Title>
                <Subtitle>
                  About the
                  {' '}
                  [
                  {productName}
                  ]
                </Subtitle>
                {question.length <= 0 || name.length <= 0 || email.length <= 0
                  ? <WarningStyle>You must enter the followings:</WarningStyle> : null}

                <QuestionTextStyle>(1) Your Question *</QuestionTextStyle>

                <QuestionInputStyle maxLength="1000" name="questionBody" placeholder="Why did you like the product or not?" required onChange={(e) => { handleAddQuestion(e); }} />

                <QuestionTextStyle>(2) What is your nickname? *</QuestionTextStyle>

                <InputStyle maxLength="60" placeholder="Example: jackson11!" name="nickname" required onChange={(e) => { handleAddQuestion(e); }} />

                <ContentStyle>
                  For privacy reasons, do not use your full name or email address
                </ContentStyle>

                <QuestionTextStyle>(3) Your email *</QuestionTextStyle>

                <InputStyle maxLength="60" placeholder="Example@example.com" name="email" required onChange={(e) => { handleAddQuestion(e); }} />

                <ContentStyle>For authentication reasons, you will not be emailed.</ContentStyle>

                <SubmitStyle type="submit">
                  Submit
                </SubmitStyle>

                <CancelStyle onClick={handleClose}>Cancel</CancelStyle>

              </FormStyle>
            </Modal>
          </Container>
        )
        : null}
    </div>
  );
};

export default AddQuestion;
