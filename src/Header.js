import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';

function Header({cartItem, user, signOut}) {

    const getCount = () =>{
        let count = 0;
        //loop through all cart items
        cartItem.forEach((item) =>{
            //Add quantity to the cart total
            count += item.products.quantity;
        })
        return count;
        
    }

    return (
        <HeaderContainer>

            <HeaderLogo>
                <Link to="/">
                    <img src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png" alt="Amazon logo" />
                </Link>
            </HeaderLogo>

            <HeaderOptionAddress>
                <LocationOnIcon/>
                <HeaderOption>
                <OptionLineOne>Hello,</OptionLineOne>
                <OptionLineTwo>Select Your Account</OptionLineTwo>
                </HeaderOption>
            </HeaderOptionAddress>

            <HeaderSearch>
                <HearderInput type="text"/>
                <HeaderSearchIcon>
                    <SearchIcon/>
                </HeaderSearchIcon>
            </HeaderSearch>

            <HeaderNavItems>
                <HeaderOption onClick={signOut}>
                    <OptionLineOne>Hello, {user.name}</OptionLineOne>
                    <OptionLineTwo>Accounts & Lists</OptionLineTwo>
                </HeaderOption>
                <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>& Order</OptionLineTwo>
                </HeaderOption>
                <HeaderOptionCard>
                    <Link to="/cart">
                        <ShoppingBasketIcon/>
                        <CardCount>{getCount()} </CardCount>
                    </Link>
                </HeaderOptionCard>
            </HeaderNavItems>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    height:60px;
    background-color:#0F1111;
    display:flex;
    align-items:center;
    color:white;
    justify-content:space-between;
`;
const HeaderLogo = styled.div`
    a{
        text-decoration:none;
        color:white;
        img{
        width:100px;
        margin-left:11px;
        }
    }
    
`;
const HeaderOptionAddress = styled.div`
    display:flex;
    padding-left:10px;
    align-items:center;
`;
const OptionLineOne = styled.div`
    
`;
const OptionLineTwo = styled.div`
    font-weight:700;
`;
const HeaderSearch = styled.div`
    display:flex;
    flex-grow:1;
    height:40px;
    border-radius:5px;
    overflow:hidden;
    margin-left:5px;
    
    :focus-within{
        box-shadow: 0 0 0 3px #f90;
    }
    
`;
const HearderInput = styled.input`
    flex-grow:1;
    border:0px;
    :focus{
        outline:none;
        
    }
`;
const HeaderSearchIcon = styled.div`
    background-color:#febd69;
    width:45px;
    color:#000;
    display:flex;
    justify-content:center;
    align-items:center;
    border-left:none;
    .MuiSvgIcon-root{
        width:30px;
        height:30px;
    }
`;
const HeaderNavItems = styled.div`
    display:flex;
    align-items:center;
`;
const HeaderOption = styled.div`
    padding:10px 9px;
    border-radius: 5px;
    cursor:pointer;
`;

const HeaderOptionCard = styled.div`
    a{
        display:flex;
        align-items:center;
        padding-right: 9px;
        color:white ;
        text-decoration:none;
    }
`;
const CardCount = styled.div`
    padding-left:4px;
    color:#febd69;
    font-weight:700;
`;


export default Header
