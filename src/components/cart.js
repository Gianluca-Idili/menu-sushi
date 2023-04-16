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

calculateDiscountPercentage = itemCount => {
if (itemCount >= 10) {
return 5;
}
return 0;
};

calculateDiscountAmount = (total, discountPercentage) => {
return (total * discountPercentage) / 100;
};

render() {
const cartItems = this.props.card ? this.props.card.filter(item => item.quantity > 0) : [];
const total = cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
const itemCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
const discountPercentage = this.calculateDiscountPercentage(itemCount);
const discountAmount = this.calculateDiscountAmount(total, discountPercentage);
const discountedTotal = total - discountAmount;
return (
  <div className='cartDiv' style={{ top: this.state.top }}>
    <h3>Cart</h3>
    <ul className='fw-bold'>
      {cartItems.map(item => (
        <li key={item.id}>
          {item.name} x {item.quantity} = €{(item.price * item.quantity).toFixed(2)}
        </li>
      ))}
    </ul>
    <p className='fw-bold my-2'>Total: €{total.toFixed(2)}</p>
    
    {discountPercentage > 0 && (
      <p className='fw-bold my-2'>Sconto {discountPercentage}%: -€{discountAmount.toFixed(2)}</p>
    )}
    <p className='fw-bold my-2'>Totale scontato: €{discountedTotal.toFixed(2)}</p>
    {itemCount >= 10 && (
      <p style={{ backgroundColor: 'rgb(40, 248, 40)' }} className='fw-bold'>Sconto applicato per l'acquisto di almeno 10 articoli</p>
    )}
    <button onClick={this.handleOrderClick}>Invia ordine</button>
    {this.state.showAlert && (
      <div
        style={{ backgroundColor: 'rgb(40, 248, 40)' }}
        className='alert fw-bold alert1'
        role='alert'
      >
        Ordine effettuato con successo, attendere l'arrivo dell'ordine!
      </div>
    )}
  </div>
);
}
}

export default Cart;