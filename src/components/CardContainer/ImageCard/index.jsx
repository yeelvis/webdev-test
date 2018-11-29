import React from 'react';
import './styles.scss';

// Display a smaller image of the original image.
// Clicking on the image will open a modal to display 
// an enlarge image.
const ImageCard = ({ onClick, url, alt }) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClick(url);
  }
  
  return (
    <div className='col-sm-4 col-md-3 col-xl-2'>
      <div className='card' onClick={handleClick}>
        <img className='image' src={url} alt={alt} />
        <span className='card-icon-open fa fa-expand-arrows-alt' value={url}></span>
      </div>
    </div>
  );
}

export default ImageCard;