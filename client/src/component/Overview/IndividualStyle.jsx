import React from 'react';
import styled from 'styled-components';

const IndividualStyle = (props) => {
  console.log(props);
  const thumbnails = [];

  return (
    <Wrapper>
      {props.style.map((style) => (
        <div>
          <img src={style.photos[0].thumbnail_url} />
          <img src={style.photos[1].thumbnail_url} />
          <img src={style.photos[2].thumbnail_url} />
          <img src={style.photos[3].thumbnail_url} />
          <img src={style.photos[4].thumbnail_url} />
          <img src={style.photos[5].thumbnail_url} />
        </div>
      ))}
    </Wrapper>
  );
};

export default IndividualStyle;

const Wrapper = styled.section`
  padding: 4em;
  display: inline-grid;
  size: 25%;
`;
