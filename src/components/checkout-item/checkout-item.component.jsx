import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart, RemoveItemFromCart, RemoveItemFromCheckout } from '../../redux/reducers/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ item, remove, removeDuringCheckout, addItemToCart }) => {
const { name, imageUrl, price, quantity } = item;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeDuringCheckout(item)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItemToCart(item)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={() => remove(item)}>&#10005;</span>
        </div>
    )
};
const mapDispatchToProps = (dispatch) => ({
    remove: (item) => dispatch(RemoveItemFromCart(item)),
    removeDuringCheckout: (item) => dispatch(RemoveItemFromCheckout(item)),
    addItemToCart: (item) => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);