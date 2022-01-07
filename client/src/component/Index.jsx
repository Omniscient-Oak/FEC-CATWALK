import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ShoppingCart, Home } from '@styled-icons/fa-solid';
import styled from 'styled-components';

const NavStyle = {
  background: 'black',
  margin: '0px 0px 10px 0px',
  height: 'autopx',
  display: 'grid',
  'grid-template-columns': 'repeat(10, 1fr)',
};

const LinkStyle = {
  color: 'white',
  margin: '10px 0px 0px 10px',
  'font-size': '40px',
  'text-decoration': 'none',
  'font-variant': 'all-small-caps',
  'font-family': 'sans-serif',
};

const ShippingStyle = {
  color: 'black',
  'font-size': '20px',
  'text-decoration': 'none',
  'font-variant': 'all-small-caps',
  'font-family': 'sans-serif',
  'text-align': 'center',
  'grid-column-start': '1',
};

const Index = () => (
  <div>
    <Wrapper>
      <div style={ShippingStyle}>Free shipping and returns!</div>
      <nav style={NavStyle}>
        <HomeGrid>
          <StyledHomeIconGridPosition>
            <StyledHomeIcon />
          </StyledHomeIconGridPosition>
          <Link style={LinkStyle} to="/">
            Home
          </Link>
        </HomeGrid>
        <ShoppingGrid>
          <StyledShoppingCartGridPosition>
            <StyledShoppingCartIcon />
          </StyledShoppingCartGridPosition>
          <Link style={LinkStyle} to={`/store/${63611}`}>
            Store
          </Link>
        </ShoppingGrid>
      </nav>
      <Outlet />
    </Wrapper>
  </div>
);

export default Index;

const StyledShoppingCartIcon = styled(ShoppingCart)`
  color: white;
  height: 30px;
  width: 30px;
`;

const StyledHomeIcon = styled(Home)`
  color: white;
  height: 30px;
  width: 30px;
`;

const StyledShoppingCartGridPosition = styled.div`
  align-self: center;
`;

const StyledHomeIconGridPosition = styled.div`
  align-self: center;
`;

const Wrapper = styled.div`
  background: white;
`;

const HomeGrid = styled.div`
  padding: 0px 75px;
  display: inline-grid;
  grid-column-start: 1;
  justify-self: center;
  grid-template-columns: 1fr 1fr;
  justify-items: end;
  height: 74px;
  &:hover {
    background-color: crimson;
  }
`;
const ShoppingGrid = styled.div`
  display: inline-grid;
  grid-column-start: 2;
  justify-self: center;
  grid-template-columns: 1fr 1fr;
  justify-items: end;
  height: 74px;
  padding: 0px 75px;
  &:hover {
    background-color: crimson;
  }
`;
