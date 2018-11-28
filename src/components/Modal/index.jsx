import React from 'react';
import './styles.scss';

// Display an larger image of the selected image.
// Able to dismiss image by clicking the `x` button or
// clicking on the overlay-bg
class Modal extends React.Component {
  preventBodyPropagation = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }
  
  render() {
    const {
      isOpen,
      onClose,
      image,
    } = this.props;

    if (!isOpen) {
      return <React.Fragment />
    }

    return (
      <div className='modal-overlay-bg' onClick={onClose}>
        <div className='modal-body' onClick={this.preventBodyPropagation}>
          <button className='close-btn' onClick={onClose}>
            <span className='fa fa-times' />
          </button>
          <img
            src={image}
            alt={image}
          />
        </div>
      </div>
    )
  }
}

export default Modal;
