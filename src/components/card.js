import React, {Component} from 'react';
import '../App.css';

class Card extends Component {
    
    render(){
        return (
            <div className="col my-4">
                <div className="card" style={{width: '18rem', textAlign: 'center'}}>
                    <img src={this.props.card.image} className="imgCard card-img-top" width={300} height={250} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.card.name} roll</h5>
                            <p className="card-text">€{this.props.card.price}</p>
                            <button onClick={() => this.props.onIncrement(this.props.card)} className="btn btn-primary mx-2">Aggiungi <span className='badge badge-light'>{this.props.card.quantity}</span></button>
                            <button onClick={() => this.props.onDelete(this.props.card)} className="btn btn-outline-danger mx-2">Elimina</button>
                        </div>
                </div>
            </div>
        );
    }
}

export default Card;