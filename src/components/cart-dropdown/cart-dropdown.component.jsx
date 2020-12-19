import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { toggleDropDown } from '../../redux/reducers/cart/cart.actions';
import { selectCartItems } from '../../redux/reducers/cart/cart.selector';
import Cartitem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                    cartItems.map((item) => (
                        <Cartitem key={item.id} item={item} />
                    )) :
                    <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleDropDown());
                }}>GO To CHECKOUT</CustomButton>
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});
export default withRouter(connect(mapStateToProps)(CartDropdown));