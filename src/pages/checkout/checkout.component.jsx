import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItems, selectTotalPrice } from '../../redux/reducers/cart/cart.selector';
import './checkout.styles.scss';

const Checkout = ({ totalPrice, cartItems }) => {
console.log('Checkout: ', totalPrice)
    return (
        <div className='checkout-page'>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((item) => {
                    return <CheckoutItem key={item.id} item={item} />
                })
            }
            <div className="total">TOTAL: ${totalPrice}</div>
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    totalPrice: selectTotalPrice,
    cartItems: selectCartItems
})
export default connect(mapStateToProps)(Checkout);