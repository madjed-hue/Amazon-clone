import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Product from './Product';
import db from './firebase';

function Home() {
    const [products, setProducts] = useState([]);
    
    

    const getProducts = ()=> {
        db.collection('products').onSnapshot((snapshot)=>{
            let temProducts = [];
            temProducts = snapshot.docs.map((doc)=> ({
                id: doc.id,
                products: doc.data()
            }));
            setProducts(temProducts);
        });
    }

    useEffect(()=>{
        getProducts();
    },[])

    return (
        <Container>
            <Banner>
                
            </Banner>
            <Content>
            {products.map((data)=>(
                <Product
                    title={data.products.name}
                    price={data.products.price}
                    rating={data.products.rating}
                    image={data.products.image}
                    id={data.id}
                />
            ))}
                
            </Content>
        </Container>
    )
}

const Container = styled.div`
    max-width:1500px;
    margin: 0 auto;
`;
const Banner = styled.div`
    background-image: url("https://i.imgur.com/SYHeuYM.jpg");
    min-height:600px;
    background-size:cover;
    background-position: center;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))
`;
const Content = styled.div`
    padding-left:10px;
    padding-right:10px;
    margin-top:-360px;
    ${'' /* margin-bottom:10px; */}
    display: flex;
    height:300px;
`;


export default Home
