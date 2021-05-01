import React from 'react'
import styled from 'styled-components'
import  db  from './firebase';

function CartItem({id, item}) {

    const deleteItem = (e)=>{
        e.preventDefault();
        db.collection('cartItems').doc(id).delete();
    }

    const options = [];

    for(let i = 1; i<Math.max(item.quantity + 1,20); i++){
        options.push(<option value={i}>Qty:{i}</option>)
    }

    const changeQuantity = (newQty) =>{
        db.collection('cartItems').doc(id).update({
            quantity:parseInt(newQty)
        })
    }

    return (
        <Container>

            <CartImageContainer>
                <img src={item.image} alt="" />
            </CartImageContainer>

            <CartItemInfo>

                <CartItemInfoTop>
                    <h2>{item.name}</h2>
                </CartItemInfoTop>

                <CartItemInfoButtom>
                    <CartItemCount>
                        <select value={item.quantity} onChange={(e)=>changeQuantity(e.target.value)}>
                            {options}
                        </select>
                    </CartItemCount>
                    <CartItemDelete onClick={deleteItem}>Delete</CartItemDelete>
                </CartItemInfoButtom>

            </CartItemInfo>

            <CartItemPrice>${item.price}</CartItemPrice>
            
        </Container>
    )
}

export default CartItem

const Container = styled.div`
    display:flex;
    padding-top:15px;
    padding-bottom:15px;
    border-bottom:1px solid #DDD;
`;
const CartImageContainer = styled.div`
    width:250px;
    height:250px;
    flex-shrink:0;
    flex-grow:0;
    img{
        object-fit:contain;
        width:100%;
        height:100%;
    }
`;
const CartItemInfo = styled.div`
    flex-grow:1;
`;
const CartItemInfoTop = styled.div`
    color:#007185;
    margin-right:16px;
    h2{
        font-size:18px;
    }
`;
const CartItemInfoButtom = styled.div`
    display:flex;
    margin-top:4px;
    align-items:center;
`;
const CartItemCount = styled.div`
    select{
        border-radius:7px;
        background-color:#f0f2f2;
        padding:5px;
        box-shadow:0 2px 5px rgba(15,17,17,.15);
    }
    select:focus {
        outline:none;
    }
`;
const CartItemDelete = styled.div`
    color:#007185;
    margin-left:16px;
    cursor:pointer;
`;
const CartItemPrice = styled.div`
    font-size:18px;
    font-weight:700;
    margin-left:16px;
`;