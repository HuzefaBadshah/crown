import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/reducers/cart/cart.selector';

const CartIcon = ({ toggleDropdown, itemCount }) => {
    return (
        <div className="cart-icon" onClick={toggleDropdown}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}
const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})
export default connect(mapStateToProps)(CartIcon);