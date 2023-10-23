import React from 'react';
import Gallery from '../../components/Gallery';

const Year2018Page = () => {
  return (
    <div className='flex min-h-screen max-w-screen-md pl-0 ml-40 justify-center'>
      <h1>2018 Photography</h1>
      <Gallery folderName="2018"  />
    </div>
  );
};

export default Year2018Page;
