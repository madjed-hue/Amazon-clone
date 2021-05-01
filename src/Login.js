import React from 'react'
import styled from 'styled-components'
import { provider, auth } from './firebase'

function Login({setUser}) {

    const signIn = ()=>{
        auth.signInWithPopup(provider).then((result) =>{
            let user = result.user;
            const newUser = {
                name: user.displayName,
                email: user.email,
                phone: user.photoURL
            }
            localStorage.setItem("user",JSON.stringify(newUser))
            setUser(newUser)
        }).catch((error) => {
            alert(error.message);
        });
    }

    return (
        <Container>
            <Content>
                <AmazoneLogo src={"https://www.presse-citron.net/app/uploads/2018/10/Amazon-logo.jpg"}/>
                <h1>Sign into Amazon</h1>
                <LoginButton onClick={signIn}>
                    sign in with google
                </LoginButton>
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
    width:100%;
    height:100vh;
    background-color:#f2f2f2;
    display:grid;
    place-items:center;
`;
const Content = styled.div`
    padding:100px;
    background-color:#fff;
    border-radius:7px;
    box-shadow: 6px 8px 20px rgb(0 0 0 / 24%);
    text-align:center;
    
`;
const AmazoneLogo = styled.img`
    height:200px;
    margin-bottom:30px;
`;
const LoginButton = styled.button`
    margin-top:50px;
    background-color:#f0c14b;
    height:40px;
    border:2px solid #a88734;
    cursor:pointer;
    border-radius:4px;
    padding:6px;
`;