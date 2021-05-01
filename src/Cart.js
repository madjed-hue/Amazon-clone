import React from 'react'
import styled from 'styled-components';
import CartItems from './CartItems';
import CartTotal from './CartTotal';


function Cart({cartItem}) {
    const getTotalPrice = () =>{
        let total = 0;
        cartItem.forEach((item) => {
            total += item.products.quantity*item.products.price;
        })
        return total;
    }

    const getTotalCount = () =>{
        let totalCount = 0;
        cartItem.forEach((item) => {
            totalCount += item.products.quantity;
        })
        return totalCount;
    }

    return (
        <CartPage>
            <CartItems cartItem={cartItem} />
            <CartTotal getTotalPrice={getTotalPrice} getTotalCount = {getTotalCount}/>
        </CartPage>
    )
}

export default Cart;

const CartPage = styled.div`
    display:flex;
    padding: 14px 18px 0 18px;
    align-items:flex-start;
`;


