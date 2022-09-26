import styled from "styled-components";
import background from '../../assets/backgroundCharacterInfo.jpg'

export const Container = styled.div`
    background: url(${background}) no-repeat center/cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ExtraText = styled.span`
    color: #fabf00;
    text-transform: uppercase;
    font: bold 16px 'Montserrat', sans-serif;
    box-shadow: #cea31768 -3px 3px 5px;
    letter-spacing: 8px;
    text-shadow: 2px 2px 2px #000000;
`

export const Character = styled.div`
    box-shadow: #cea317 0px 5px 15px;
    background-color: rgba(240, 248, 255, 0.547);
    text-decoration: none;
    color: black;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 0.3s;
    padding: 40px 60px;
    text-transform: uppercase;
    font: 500 18px 'Montserrat', sans-serif;
    text-align: center;
    max-width: 80%;
    margin: 0 auto;
    letter-spacing: 2px;
`

export const Item = styled.p`
    margin: 15px 0;
`