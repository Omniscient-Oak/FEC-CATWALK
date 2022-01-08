import React, { useContext, useState, lazy } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import ProductContext from '../ProductContext';

const CompareTable = lazy(() => import('./CompareTable'));
const CompareModal = lazy(() => import('./CompareModal'));

const fadeIn = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;

const ItemStyle = styled.div`
  height: 100%;
  width: 12vw;
  min-height: 275px;
  min-width: 150px;
  object-fit: cover;
  flex: 0 0 auto;
  padding: 5%;
  background: #eeeeee;
  text-align: center;
  box-sizing: border-box;
  box-shadow: 2px 2px 3px #d3d3d3;
  margin-right: 1em;
  margin-left: 1em;
  justify-content: row;
  animation-name: ${fadeIn};
  animation-duration: 0.5s;
  transition-timing-function: ease-in;
  animation-fill-mode: both;
  transition: all 0.2s;
  &:hover ${ItemStyle} {
    box-shadow: 4px 4px 5px #d3d3d3;
    background: #e8e8e8;
  }
`;
const TextBoxStyle = styled.div`
  margin-top: 15px;
  background: white;
  height: 30%;
  box-sizing: border-box;
  padding-top: 1%;
  text-align: left;
`;

const NameTitleStyle = styled.p`
  margin-left: 5%;
  margin-top: 3%;
  font-size: 14px;
  font-weight: bold;
  color: black;
`;

const TextStyle = styled.p`
  margin-left: 5%;
  font-size: 14px;
  color: black;
`;

const ImageStyle = styled.img`
  height: 65%;
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  box-shadow: 2px 2px 3px #d3d3d3;
  background: #d3d3d3;
`;

const CompareButtonDivStyle = styled.div`
  text-align: center;
`;

const CompareButtonStyle = styled.button`
  margin-top: 1em;
  background: light-grey;
  color: grey;
  border: 0px;
  padding: 5px;
  animation-name: ${fadeIn};
  animation-duration: 0.5s;
  transition-timing-function: ease-in;
  animation-fill-mode: both;
  transition: all 0.1s;
  &:hover ${CompareButtonStyle} {
    box-shadow: 4px 4px 5px #d3d3d3;
    background: #e8e8e8;
  }
`;

const ContainerStyle = styled.div``;

const RelatedItem = ({ item }) => {
  const { setProductId } = useContext(ProductContext);
  const [popup, setPopup] = useState(false);
  return (
    <ContainerStyle>
      <Link to={`/store/${item.id}`}>
        <ItemStyle onClick={() => setProductId(item.id)}>
          <ImageStyle src={item.photo} />
          <TextBoxStyle>
            <NameTitleStyle>{item.name}</NameTitleStyle>
            <TextStyle>
              $
              {item.default_price}
              {item.rating > 0
              && (
              <div>
                Rating:
                {item.rating}
              </div>
              )}
            </TextStyle>
          </TextBoxStyle>
        </ItemStyle>
      </Link>
      <CompareButtonDivStyle>
        {popup && (
        <CompareModal
          content={
            <CompareTable currentProduct={item} compareProduct={item} />
        }
          toggle={setPopup}
        />
        )}
        <CompareButtonStyle onClick={() => {
          setPopup(!popup);
        }}
        >
          Compare
        </CompareButtonStyle>
      </CompareButtonDivStyle>
    </ContainerStyle>
  );
};

export default RelatedItem;
