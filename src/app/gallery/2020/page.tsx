
import React from 'react';
import Gallery from '../../components/Gallery';

const Year2020Page = () => {
  return (
    <div className='flex justify-center mx-auto'>
      <h1>2020 Photography</h1>
      <Gallery folderName="2020" />
    </div>
  );
};

export default Year2020Page;
