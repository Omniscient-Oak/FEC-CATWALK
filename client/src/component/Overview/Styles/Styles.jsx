import React from 'react';
import styled from 'styled-components';

const Styles = (props) => {
  if (props.productStyles === undefined) {
    return <div>loading...</div>;
  } else {
    return (
      <div>
        {props.productStyles.map((style) => {
          return (
            <ButtonStyled color={style.name.split(' ').slice(0)}></ButtonStyled>
          );
        })}
      </div>
    );
  }
};

export default Styles;

const ButtonStyled = styled.button`
  background: blue;
`;
