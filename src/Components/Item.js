import React, { Component } from 'react';
// Create our number formatter.
class Item extends Component {
    formatCurrency() {
        var price = parseFloat(this.props.price);
        return price.toLocaleString('en-US', { style: 'currency', currency: 'VND' });
    }
    constructor (props) {
        super(props);
        this.state = {
            updatable: false,
            name: props.name,
            status: props.status,
            quantity: props.quantity
        };
      }
      onTodoChange(value){
        this.setState({
             quantity: value
        });
    }
    render() {
        return (
                <div className="card mt-5 mb-5" style={{ width: 22 + 'rem' }}>
                    <img className="card-img-top poster" src={this.props.images} alt="None" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.content}</p>
                        <p className="card-text">Price: {this.formatCurrency()}</p>
                        <p className="card-text">Quantity: 
                        <input 
                        className="quantity-input ml-4 w-50" 
                        type="number" 
                        value={this.state.quantity} 
                        onChange={e => this.onTodoChange(e.target.value)}
                        />
                        </p>
                        <div class="form-check">
                            <input type="checkbox" className="form-check-input "/>
                                <label className="form-check-label ml-4 mt-1" >Get it</label>
                        </div>
                    </div>
                </div>
        );
    }

}

export default Item;
