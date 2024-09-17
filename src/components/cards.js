import React from 'react';
import './cards.css';
import{ Card, Image } from 'semantic-ui-react';
import styled from 'styled-components';
import Container from './footer';
import DividerExampleHorizontalTable from './form'


import MainHeader from './Header.js';
// const maincolor =`#9F2B68`;
const datesmain =`#800000`;
const Styled = styled.h2`
color: ${props => (props.foo ? "yellow":"blue")};

&:hover {
    background-color: #FFC0CB;
    color:red;
    transition:2s;
    transform: scaleY(1.5);
  }
`
const Dates = styled.h2`
color: ${props => (props.datesmain ? datesmain:"#FF0000")};`

function CardImg(props) {
    console.log(props);
    return (
<Card id="moon-card">
<MainHeader></MainHeader>
<Image src={props.url}/>
<Card.Content>
{/* <Button foo>{props.title}</Button> */}
return <Styled foo={props.foo}>{props.children}</Styled>
<CardImg foo='bar'>Hello World</CardImg>
<hr></hr>
<Dates>Date:{props.date}</Dates>
<Card.Description className='content'>
{props.explanation}
</Card.Description>
<br></br>
</Card.Content>  
<DividerExampleHorizontalTable></DividerExampleHorizontalTable>  
<Container></Container>
 
</Card>
    );
}

export default CardImg;