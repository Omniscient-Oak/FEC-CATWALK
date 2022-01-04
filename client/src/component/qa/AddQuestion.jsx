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
height: 60%;
overflow: auto;
`;

const AddButton = styled.button`
height: 40px;
width: 200px;
background-color: white;
margin: 10px;
font-size: 15px;
border-radius: 10px;
cursor: pointer;
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
    } else if (event.target.name === 'email' && validateEmail(event.target.value)) {
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
            <Modal>
              <form style={{ display: 'inline-block' }} onSubmit={handleSubmit}>
                <h4 style={{ fontSize: '20px' }}>Ask Your Question</h4>
                <h5 style={{ fontSize: '12px' }}>
                  About the
                  {' '}
                  [
                  {productName}
                  ]
                </h5>
                {question.length <= 0 || name.length <= 0 || email.length <= 0 ? <p style={{ color: 'red', fontSize: '10px' }}>You must enter the followings:</p> : null}
                <p style={{ fontSize: '15px' }}>(1) Your Question *</p>
                <textarea style={{ width: '80%', height: '15%' }} maxLength="1000" name="questionBody" placeholder="Why did you like the product or not?" required onChange={(e) => { handleAddQuestion(e); }} />
                <p style={{ fontSize: '15px' }}>(2) What is your nickname? *</p>
                <input style={{ width: '80%', height: '8%' }} maxLength="60" placeholder="Example: jackson11!" name="nickname" required onChange={(e) => { handleAddQuestion(e); }} />
                <p style={{ fontSize: '10px' }}>For privacy reasons, do not use your full name or email address</p>
                <p style={{ fontSize: '15px' }}>(3) Your email *</p>
                <input style={{ width: '80%', height: '8%' }} maxLength="60" placeholder="Example@example.com" name="email" required onChange={(e) => { handleAddQuestion(e); }} />
                <p style={{ fontSize: '10px' }}>For authentication reasons, you will not be emailed.</p>
                <button
                  style={{ fontSize: '15px', cursor: 'pointer' }}
                  type="submit"
                >
                  Submit

                </button>
                <button style={{ marginLeft: '50px', fontSize: '15px', cursor: 'pointer' }} type="button" onClick={handleClose}>Cancel</button>
              </form>
            </Modal>
          </Container>
        )
        : null}
    </div>
  );
};

export default AddQuestion;
