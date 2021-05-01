import React from 'react'
import styled from 'styled-components';
import db from './firebase';


function Product({title, price, rating, image,id}) {
    
    const addToCart = () =>{
        
        const cartItem = db.collection('cartItems').doc(id);
        cartItem.get().then((doc)=>{
            if(doc.exists){
                cartItem.update({
                    quantity : doc.data().quantity + 1
                })
            }else{
                db.collection('cartItems').doc(id).set({
                    name:title,
                    image : image,
                    price : price,
                    quantity: 1
                })
            }
            
        })
    }

    return (
        <Container>
            <Title>{title} </Title>
            <Price>${price}</Price>
            <Rating>{Array(rating).fill().map(rating =><p>⭐</p>)}</Rating>
            <Image src={image} alt="" />
            <ActionSection>
                <AddToCartButton onClick={addToCart}>
                    Add to cart
                </AddToCartButton>
            </ActionSection>
        </Container>
    )
}
export default Product

const Container = styled.div`
    background-color: #fff ;
    z-index:2;
    padding:10px;
    min-height:420px;
    ${'' /* max-width:400px; */}
    flex: 1;
    margin:10px;
    display:flex;
    flex-direction:column;
    border-radius:5px;
`;
const Title = styled.span`


`;
const Price = styled.span`
    font-weight:500;
    margin-top:3px;
`;
const Rating = styled.div`
    display:flex;
`;

const Image = styled.img`
    max-height:300px;
    object-fit:contain;
`;
const ActionSection = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;

const AddToCartButton = styled.button`
    width:100px;
    background-color: #f0c14b;
    border:2px solid #a88734;
    border-radius:2px;
    height:30px;
    cursor:pointer;
`;


