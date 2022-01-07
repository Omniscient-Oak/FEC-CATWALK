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
  height: 640px;
  overflow: auto;
  padding: 0px 10px 30px 10px;
`;
