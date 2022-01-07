import React from 'react';
import styled from 'styled-components';
import TinyImage from './TinyImage.jsx';

const Sidebar = ({ images, setMainImage }) => {
  let index = 0;

  return (
    <SidebarScroll>
      {images.map((photo) => (
        <TinyImage photo={photo} index={index++} setMainImage={setMainImage} />
      ))}
    </SidebarScroll>
  );
};

export default Sidebar;

const SidebarScroll = styled.div`
  height: 530px;
  overflow: scroll;
  padding: 10px;
  margin: 5px;
`;
