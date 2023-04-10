import React, { Component } from 'react';
import '../App.css';

class Cart extends Component {
  state = {
    top: 50,
    showAlert: false
  };
    
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
    
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleOrderClick = () => {
    // Imposta lo stato showAlert a true per mostrare l'alert
    this.setState({ showAlert: true });

    // Nasconde l'alert dopo 10 secondi
    setTimeout(() => {
      this.setState({ showAlert: false });
    }, 10000);

    // Resetta il cart
    this.props.onResetCart();
  };

  render() {
    const cartItems = this.props.card ? this.props.card.filter(item => item.quantity > 0) : [];
    const total = cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2);
  
    return (
      <div className='cartDiv' style={{ top: this.state.top }}>
        <h3>Cart</h3>
        <ul className='fw-bold'>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} x {item.quantity} = €{item.price * item.quantity}
            </li>
          ))}
        </ul>
        <p className='fw-bold'>Total: €{total}</p>
        <button onClick={this.handleOrderClick}>Invia ordine</button>
        {this.state.showAlert && (
          <div className="alert" role="alert">
            Ordine effettuato con successo, attendere l'arrivo dell'ordine!
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
