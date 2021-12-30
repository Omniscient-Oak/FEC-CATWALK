import React from 'react';

const SelectedStyle = (props) => {
  if (props.productStyles === undefined) {
    return <div>loading...</div>;
  } else {
    return (
      <div>
        Selected Style > {props.productStyles[props.currentStyleIndex].name}
      </div>
    );
  }
};

export default SelectedStyle;
