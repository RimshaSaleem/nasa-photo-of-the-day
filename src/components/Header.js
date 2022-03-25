 import React from 'react';
import styled from 'styled-components';


import logo from '../components/nasa-logo.jpg'

function MainHeader() {
   const Container = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      width:100%;
      background-color:#A95C68;
      height:15vh;
   `

    const LogoImg = styled.img`
       width:100px;
       float:left;
       height:80px;
       border-radius:5%;
   `
   const Header = styled.h1`
       text-align: center;
      font-family: 'Lexend Mega', sans-serif;
      color: white;
      margin:20px;
            
   `
   return (
      <Container>
          <LogoImg src={logo} /> 
         <Header>Here is Nasa Picture of the Day</Header>
      </Container>
   );
}



export default MainHeader;