import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
justifyContent: center;
backgroundColor: rgba(0, 0, 0, 0.5)
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const AddButton = styled.button`
height: 40px;
width: 200px;
background-color: white;
margin: 10px;
font-size: 15px;
border-radius: 10px;
&:hover{
  color: blue;
}
`;

const AddQuestion = ({ productId }) => {
  const [show, setShow] = useState(false);
  const [productName, setProductName] = useState('');
  const [question, setQuestion] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  axios.get('http://localhost:3000/products/info/', { params: { product_id: productId } })
    .then((response) => {
      setProductName(response.data.name);
    })
    .catch((err) => {
      throw err;
    });

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
    } else if (event.target.name === 'email') {
      setEmail(event.target.value);
    }
  });

  const handleSubmit = (() => {
    const newQuestion = {
      body: question,
      name,
      email,
      product_id: productId,
    };

    // if (question.length < 1 || name.length < 1 || email.length < 1 || !validateEmail(email)) {

    // }
    axios.post('http://localhost:3000/qa/questions', newQuestion).then(() => {
      console.log('sent');
    }).catch((err) => { console.log('post question error', err); });
  });

  return (
    <div>
      <AddButton onClick={handleShow}> Add A Question </AddButton>
      {show
        ? (
          <Container>

            <h4>Ask Your Question</h4>

            <form onSubmit={handleSubmit}>
              <h5>
                About the
                {' '}
                [
                {productName}
                ]
              </h5>
              <p>(1) Your Question *</p>
              <textarea maxLength="1000" name="questionBody" placeholder="Why did you like the product or not?" required onChange={(e) => { handleAddQuestion(e); }} />
              <p>(2) What is your nickname? *</p>
              <input maxLength="60" placeholder="Example: jackson11!" name="nickname" required onChange={(e) => { handleAddQuestion(e); }} />
              <p>For privacy reasons, do not use your full name or email address</p>
              <p>(3) Your email *</p>
              <input maxLength="60" placeholder="Example@example.com" name="email" required onChange={(e) => { handleAddQuestion(e); }} />
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

export default AddQuestion;

// position: fixed;
// z-index: 1;
// left: 0;
// top: 0;
// width: 100%;
// height: 100%;
// overflow: auto;
// background-color: rgb(0,0,0);
// background-color: rgba(0,0,0,0.4);
