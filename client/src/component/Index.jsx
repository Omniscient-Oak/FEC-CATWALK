import React from 'react';
import App from './App';

const Index = () => {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/App">App</Link> |{" "}
      </nav>
    </div>
  )
};

export default Index;
