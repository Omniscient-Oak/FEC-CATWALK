import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const AddAnswer = (productName, questionBody, handleAddAnswer) => {
  const postAnswer = (() => {
    axios.post().then().catch();
    handleAddAnswer();
  });

  return (
    <Container>
      <form onSubmit={postAnswer}>
        <h4>Submit Your Answer</h4>
        <h5>
          {productName}
          :
          {' '}
          {questionBody}
        </h5>
        <p>(1) Your Answer *</p>
        <textarea maxLength="1000" />
        <p>(2) What is your nickname? *</p>
        <input maxLength="60" placeholder="Example: jack543!" />
        <p>For privacy reasons, do not use your full name or email address</p>
        <p>(3) Your email *</p>
        <input maxLength="60" placeholder="Example: jack@email.com" />
        <p>For authentication reasons, you will not be emailed.</p>
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
};

export default AddAnswer;
