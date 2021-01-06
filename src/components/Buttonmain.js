import React from 'react'
import styled from 'styled-components'

export default function Buttonmain (props){
    return(
        <Wrapper>
            <Title>
                {props.title || "Apply now"}
            </Title>
        </Wrapper>



    )

}


const Wrapper = styled.div`
    width: 200px;
    height: 38px;
    background: radial-gradient(141.74% 1107.18% at 128.7% 10%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
    border: 0.75px solid rgba(255, 255, 255, 0.27);
    filter: drop-shadow(0px 3px 4px rgba(106, 13, 173, 0.2));
    border-radius: 45px;
    align-items:center;
`
const Title = styled.div`
    text-align:center;
    padding-top:8px;
    text-decoration:none;

`