import React from 'react';
import Gallery from '../../components/Gallery';

const Year2019Page = () => {
  return (
    <div className='flex justify-center mx-auto'>
      <h1>2019 Photography</h1>
      <Gallery folderName="2019"  />
    </div>
  );
};

export default Year2019Page;
