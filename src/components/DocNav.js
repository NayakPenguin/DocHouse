import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Avatar } from '@material-ui/core';

const DocNav = () => {
    return (
        <Nav>
            <Logo>
                .DocHouse
            </Logo>
            <Menu>
                <MenuItem>
                    Home
                </MenuItem>
                <MenuItem>
                    Show Analytics
                </MenuItem>
                <Avatar style={{cursor: 'pointer', marginRight: '0.4rem'}}/>
                <ion-icon name="chevron-down-outline"  style={{cursor: 'pointer'}}></ion-icon>
            </Menu>
        </Nav>
    )
}

export default DocNav

const Nav = styled.div`
    position: sticky;
    z-index: 100;
    top: 0;
    width: 100%;
    padding: 1rem 7vw;
    /* color: white; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: white;
    border-bottom: 1px solid #efe1e1;
`

const Logo = styled.div`
    font-size: 2rem;
    font-weight: 700;
    /* color: white; */
`

const Menu = styled.div`
    overflow: hidden;
    display: flex; 
    justify-content: space-between;
    align-items: center;
`

const MenuItem = styled.div`
    cursor: pointer;
    font-size: 0.75rem;
    color: grey;
    margin-right: 2rem;

    &:hover{
        color: #333;
        transition-duration: 250ms;
    }

`

const MenuItemEnlightened = styled.a`
    cursor: pointer;
    border-radius: 6px;
    border: 1px solid #333;
    font-size: 0.75rem;
    padding: 0.55rem 1rem;
    text-decoration: none;
    
    &:hover{
        background: #333;
        color: white;
        transition-duration: 250ms;
    }
`