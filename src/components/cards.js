import React from 'react';
import './cards.css';
import{ Card, Image } from 'semantic-ui-react';
import styled from 'styled-components';
import Footer from './footer';

import MainHeader from './Header.js';
const Title = styled.h2`
color:purple;
`
const Dates = styled.h2`
color:red;`
function CardImg(props) {
    console.log(props);
    return (
<Card id="moon-card">
<MainHeader></MainHeader>
<Image src={props.url}/>
<Card.Content>
<Title>{props.title}</Title>
<hr></hr>
<Dates>Date:{props.date}</Dates>
<Card.Description className='content'>
{props.explanation}
</Card.Description>
<br></br>
<Footer></Footer>
</Card.Content>    
        </Card>
    );
}

export default CardImg;