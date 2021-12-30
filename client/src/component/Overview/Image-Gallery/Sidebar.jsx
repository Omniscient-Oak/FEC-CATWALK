import React from 'react';
import styled from 'styled-components';
import TinyImage from './TinyImage.jsx';

const Sidebar = (props) => {
  var index = 0;

  if (props.images === undefined) {
    return <div>hello world</div>;
  } else {
    return (
      <div>
        {props.images[props.currentStyleIndex].photos.map((photo) => (
          <TinyImage
            photo={photo}
            index={index++}
            setMainImage={props.setMainImage}
          />
        ))}
      </div>
    );
  }
};

export default Sidebar;
