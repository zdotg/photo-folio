'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface GalleryProps {
  folderName: string;
  
}

const Gallery = ({ folderName}: GalleryProps) => {
  const [photos, setPhotos] = useState<string[]>([]); // Specify the type as an array of strings if it's an array

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(`/images/${folderName}}`);
        if (response.ok) {
          const imageList = await response.json();
          setPhotos(imageList);
        } else {
          console.error(`Failed to fetch images from folder ${folderName}`);
        }
      } catch (error) {
        console.error(`Error fetching images: ${error}`);
      }
    };

    fetchPhotos();
  }, [folderName]); 

  return (
    <div>
      {photos.map((photo, index) => (
        <Image key={index} src={`/images/${folderName}/${photo}`} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default Gallery;
