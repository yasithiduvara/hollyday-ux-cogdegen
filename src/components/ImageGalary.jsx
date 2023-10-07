import React, { useState } from 'react';




const ImageGalary = (props) => {
  const images1 = props.images;
  console.log("Images: ",images1);
  // const images = [
  //   'https://via.placeholder.com/300x200?text=Image+1',
  //   'https://via.placeholder.com/300x200?text=Image+2',
  //   'https://via.placeholder.com/300x200?text=Image+3',
  //   'https://via.placeholder.com/300x200?text=Image+4',
  // ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images1.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images1.length - 1 : prevImage - 1
    );
  };

  return (
  
      <div className="relative w-full max-w-xl ">
        <img
          src={images1[currentImage]}
          alt={`Image ${currentImage + 1}`}
          className="w-full h-full object-cover rounded-lg shadow-lg transition-opacity duration-500 ease-in-out hover:opacity-90"
          key={currentImage} // Add a key to the image for smoother transitions
        />
        <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-white bg-gray-500 hover:bg-gray-600 rounded-full focus:outline-none transition-transform duration-300 ease-in-out hover:scale-110"
        >
          &lt;
        </button>
        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-white bg-gray-500 hover:bg-gray-600 rounded-full focus:outline-none transition-transform duration-300 ease-in-out hover:scale-110"
        >
          &gt;
        </button>
      </div>
   
  );
};



export default ImageGalary;
