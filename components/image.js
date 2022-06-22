import React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Image = ({ src, className }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <figure onClick={() => setIsOpen(true)}>
      <img className={className} src={src} alt="Fasilitas" />
      {isOpen && (
        <Lightbox mainSrc={src} onCloseRequest={() => setIsOpen(false)} />
      )}
    </figure>
  );
};

export default Image;
