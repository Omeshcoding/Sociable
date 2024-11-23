import React from 'react';

const Image = ({ srcImage, altText, loading, style }) => {
  return (
    <>
      <img src={srcImage} alt={altText} loading="lazy" className={style} />
    </>
  );
};

export default Image;
