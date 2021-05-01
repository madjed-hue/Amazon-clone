import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format';

function CartTotal({getTotalPrice, getTotalCount}) {
    
    return (
        <Container>
            <Subtotal>
                SubTotal ( {getTotalCount()} items)<br/>
                <NumberFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </Subtotal>
            <CheckoutButton>Proceed to checkout</CheckoutButton>
        </Container>
    )
}

export default CartTotal


const Container = styled.div`
    flex:0.3;
    padding: 20px;
    background-color:#fff;
    padding: 15px 10px 20px;
    text-align:center;
`;

const Subtotal = styled.h2`
    margin-bottom:16px;
`;
const CheckoutButton = styled.button`
    background-color:#febd69;
    width:100%;
    padding:4px 8px;
    cursor:pointer;
    border:2px solid #a88734;
    border-radius:4px;
    font-size:16px;
    transition: 200ms ease-in;
    :hover{
        background-color:#fb9f29;
    }
`;