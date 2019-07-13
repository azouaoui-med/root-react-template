import React from 'react';

import Nav from '../Nav/Nav';
import TopBar from '../TopBar/TopBar';

const header = () => {
  return (
    <div className='header'>
      <TopBar />
      <Nav />
    </div>
  );
};

export default header;
