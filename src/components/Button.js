import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';

export default function Button (props) {
    return (
        <Link to="/sign-in">
        <Wrapper>
            <Titile>
               {props.title  || "Sign In" }
            </Titile>
        </Wrapper>
        </Link>
    )
}

const Wrapper = styled.div`

    width: 115px;
    height: 35px;
    background: radial-gradient(141.74% 1107.18% at 128.7% 10%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
    border: 0.75px solid rgba(255, 255, 255, 0.27);
    filter: drop-shadow(0px 3px 4px rgba(106, 13, 173, 0.2));
    border-radius: 21px;
    cursor:pointer;

`


const Titile = styled.div`
    text-align:center;
    padding-top:5px;
    text-decoration:none;
`