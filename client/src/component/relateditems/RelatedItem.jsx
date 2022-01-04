import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import ProductContext from '../ProductContext';

const ItemStyle = styled.div`
  height: 100%;
  min-width: 300px;
  width: 20%;
  object-fit: cover;
  flex: 0 0 auto;
  padding: 0;
  background: #D3D3D3;
  border: 1px solid black;
  text-align: center;

`;
const TextStyle = styled.div`
`

const ImageStyle = styled.img`
  height: 100%;
  width: 80%;
  object-fit: cover;
`

const RelatedItem = (props) => {
  const { setProductId } = useContext(ProductContext);
  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  };

  return (
    <Link to={`/store/${props.item.id}`}>
    <ItemStyle onClick={()=>setProductId(props.item.id)}>
      <ImageStyle src={props.item.photo}/>
      <TextStyle>
        {props.item.name},
        ${props.item.default_price},
        Rating: {props.item.rating}
      </TextStyle>
    </ItemStyle>
    </Link>
  );
};

export default RelatedItem;
