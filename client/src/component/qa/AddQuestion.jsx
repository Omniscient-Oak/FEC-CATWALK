import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Modal = require('react-bootstrap-modal');

const Container = styled.div`
position: fixed;
top: 0px;
bottom: 0px;
left: 0px;
right: 0px;
opacity: 0.0;
z-index = 10000;
background-color: #000000;
display: none;
`;

const AddQuestion = ({ productId }) => {
  const [show, setShow] = useState(false);
  const [productName, setProductName] = useState('');
  const [question, setQuestion] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  axios.get('/products/info/', { params: { product_id: productId } })
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

  const handleSubmit = () => {
    const newQuestion = {
      body: question,
      name,
      email,
      product_id: productId,
    };

    if (question.length < 1 || name.length < 1 || email.length < 1 || !validateEmail(email)) {
      return <p>You must enter the following:</p>;
    }
    axios.post('/qa/questions', newQuestion).then(() => {
      console.log('sent');
    }).catch((err) => { console.log('post question error', err); });
  };

  return (
    <div>
      <button type="button" variant="primary" onClick={handleShow}> Add A Question </button>
      <Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ask Your Question</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
              <button type="submit" onClick={handleClose}>Submit</button>
            </form>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default AddQuestion;
