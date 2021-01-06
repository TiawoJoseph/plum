import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Button from './Button';


export default function Menutoggle(props) {
    const {isOpen} = props




    return(
      <Wrapper isOpen={isOpen} >
          <Vid className="toggle-items">
          <p className="signin-btn"> <Link to="/">HOME</Link></p>
          <br />
          <p><Link to="/products">PRODUCTS</Link></p>
          <br />
          <p><Link to="/company">COMPNAY</Link></p>
          <br />
          <br />
          <Button title="SIGN IN"></Button>
          </Vid>
      </Wrapper>


    )
}


const Wrapper = styled.div`
    background:rgba(15,14,71,0.3);
    box-shaddow:0px 50px 100px rgba(0,0,0,0.25), 
    inset 0px 0px 0px 0.5px rgba(255,255,255,0.2);
    backdrop-filter:blur(40px);
    cursor:pointer;
    border-radius:20px;
    padding:20px;
    padding-bottom:50px;
    position:absolute;
    right:80px;
    top:60px;
    opacity:${props => (props.isOpen ? 1 : 0)};
    z-index:2;
    transition:0.3s ease-in-out;
    visibility:${ props => (props.isOpen ? "visible" : "hidden")};
`
const Vid = styled.div`
display:flex;
flex-direction:column;
justify-content: space-evenly;
align-items:flex-start;

   
`

