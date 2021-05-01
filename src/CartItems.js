import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem';

function CartItems({cartItem}) {
    return (
        <Container>
            <Titel>Shopping Cart</Titel>
            <hr/>
            <ItemsContainer>
            {cartItem.map((item)=>(
                <CartItem 
                    id={item.id}
                    item={item.products}
                />
            ))}
            </ItemsContainer>
            
        </Container>
    )
}

export default CartItems

const Container = styled.div`
    flex:0.7;
    background-color:#fff;
    margin-right:18px;
    padding: 20px;
`;
const Titel = styled.h1`
    margin-bottom:10px;
`
const ItemsContainer = styled.div``