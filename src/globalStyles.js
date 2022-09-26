import styled, { createGlobalStyle, keyframes } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap');
    * {
        margin: 0;
        padding: 0;
        font-family: Montserrat, Sans-Serif;
        text-decoration: none;
    }
`;

export const LoaderContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    grid-auto-rows: 200px;
    grid-template-areas:
    ". a a ."
    ". a a ."
    ". a a ."
    ". a a .";
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);
    grid-area: a;
    align-self: center;
    justify-self: center;
    border-top: 2px solid grey;
    border-right: 2px solid grey;
    border-bottom: 2px solid grey;
    border-left: 2px solid black;
    background: transparent;
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;