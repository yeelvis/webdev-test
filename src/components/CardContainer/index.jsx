import React from 'react';
import ImageCard from './ImageCard';
import './styles.scss';

// Container that house all the image card
// Utilized bootstrap styling for organizing cards in 
// grid format
class CardContainer extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.refs.iScroll.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    this.refs.iScroll.removeEventListener('scroll', this.handleScroll);
  }

  // Handle infinitely scrolling container to load more images.
  // Ideally this will make a request to the server for more images
  // right now, I will keep appending the same images to the component state
  handleScroll = () => {
    if (this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >= this.refs.iScroll.scrollHeight) {
      this.props.fetchMore();
    }
  }

  handleClick(url) {
    this.props.onClick(url);
  }

  render(){
    return (
      <div className='card-container row' ref='iScroll'>
      {this.props.cardImages.map((cardImage, index) => (
        <ImageCard
          key={index} 
          onClick={this.handleClick}
          url={cardImage.image} 
          alt={cardImage.source}
        />
      ))}
    </div>
    )
  }
}

export default CardContainer;