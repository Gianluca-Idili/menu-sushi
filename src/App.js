import React, { Component } from 'react';
import './App.css';
import * as Icon from 'react-bootstrap-icons';


import Navbar from './components/navbar';
import Card from './components/card';
import Cart from './components/cart';

import california from './images/s3.jpg';
import dragon from './images/s2.jpg';
import dynamite from './images/s4.jpg';
import philadephia from './images/s5.jpg';
import rainbow from './images/s6.jpg';
import shrimp from './images/s7.jpg';

class App extends Component {
  state = {
    cards: [
      { id: 0, name: "Alghero", price: 3.99, image: california, quantity: 0 },
      { id: 1, name: "Red Dragon", price: 1.99, image: dragon, quantity: 0 },
      { id: 2, name: "Salmon", price: 4.99, image: dynamite, quantity: 0 },
      { id: 3, name: "Grand Avocado", price: 10.49, image: philadephia, quantity: 0 },
      { id: 4, name: "Mix degustation", price: 14.99, image: rainbow, quantity: 0 },
      { id: 5, name: "Big vision", price: 13.99, image: shrimp, quantity: 0 },
    ],
    cart: [],
    isCartOpen: false // toggle
  }

 
  

  toggleCart = () => {
    this.setState(prevState => ({
      isCartOpen: !prevState.isCartOpen
    }));
  }

  handleDelete = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = { ...card };
    if (cards[id].quantity > 0) {
      cards[id].quantity--;
    }
    this.setState({ cards });
  }

  handleIncrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = { ...card };
    cards[id].quantity++;
    this.setState({ cards });
  }

  handleReset = () => {
    const cards = this.state.cards.map(card => {
      card.quantity = 0;
      return card;
    });
    this.setState({ cards, cart: [] });
  }

  handleSendOrder = () => {
    this.setState({ cart: [] });
    alert('Ordine inviato!');
  }

  render() {
    return (
      <>
        <Navbar onToggleCart={this.toggleCart} />
        <div className='container'>
          <hr />
          <div className='row'>
            <div className='col-md-10'>
              <h1 className='m-2'>Cosa desideri ordinare?</h1>
              <div className='row'>
                {this.state.cards.map(card => (
                  <Card
                    key={card.id}
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}
                    card={card}
                  />
                ))}
              </div>
            </div>
            <div className='col-md-2'>
              {this.state.isCartOpen && (
                <Cart
                  card={this.state.cards}
                  onResetCart={this.handleReset}
                  onSendOrder={this.handleSendOrder}
                />
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
