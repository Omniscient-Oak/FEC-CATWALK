import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Index = () => (
  <div>
    <StyledNav>
      <nav
        style={{
          paddingTop: '1rem',
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
          paddingLeft: '2rem',
        }}
      >
        <Link to='/'>Home</Link> | <Link to={`/store/${63611}`}>Store</Link> |{' '}
      </nav>
    </StyledNav>
    <Outlet />
  </div>
);

export default Index;

const StyledNav = styled.section`
  background: grey;
`;
