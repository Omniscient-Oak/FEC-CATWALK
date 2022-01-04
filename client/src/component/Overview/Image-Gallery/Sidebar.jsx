import React from 'react';
import styled from 'styled-components';
import TinyImage from './TinyImage.jsx';

const Sidebar = (props) => {
  let index = 0;

  if (props.images === undefined) {
    return <div>hello world</div>;
  }
  return (
    <SidebarScroll>
      {props.images[props.currentStyleIndex].photos.map((photo) => (
        <TinyImage
          photo={photo}
          index={index++}
          setMainImage={props.setMainImage}
        />
      ))}
    </SidebarScroll>
  );
};

export default Sidebar;

const SidebarScroll = styled.div`
  height: 458px;
  overflow: scroll;
  padding: 10px;
  margin: 5px;
`;
