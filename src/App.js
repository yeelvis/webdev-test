import React, { Component } from 'react';
import Modal from './components/Modal';
import CardContainer from './components/CardContainer';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

// load data
// image is loaded via public directory. This is a just a
// substitute for when images are fetch from a server.
const data = require('./data/dogs.json');

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      showModal: false,
      image: '',
      dogs: data.dogs,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.fetchMore = this.fetchMore.bind(this);
  }

  // This should be replace with an api call to fetch more images
  // This is just a placeholder for infinite scrolling many images
  fetchMore(){
    this.setState({
      dogs: this.state.dogs.concat(data.dogs),
    });
  }

  openModal(image, e) {
    this.setState({
      showModal: true,
      image,
    });
  }

  closeModal(image, e) {
    this.setState({
      showModal: false,
      image,
    });
  }

  getModal() {
    return (
      <Modal
        image={this.state.image}
        isOpen={this.state.showModal}
        onClose={this.closeModal}
      />
    );
  }

  getCardContainer() {
    return (
      <CardContainer
        onClick={this.openModal}
        cardImages={this.state.dogs}
        fetchMore={this.fetchMore}
      />
    );
  }

  render() {
    return (
      <div className='container'>
        <AppHeader />
        { this.getCardContainer() }
        { this.getModal() }
        <AppFooter />
      </div>
    );
  }
}

export default App;
