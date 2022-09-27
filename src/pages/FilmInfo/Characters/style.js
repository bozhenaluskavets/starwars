import styled from "styled-components"

export const CharactersList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: black;
`

export const AllCharacters = styled.div`
    color: #000;
    margin-right: 25px;
    transition: 0.3s;
    text-decoration: none;
    cursor: pointer;
    color: black;
    font-weight: 700;

    :hover {
        text-shadow: 2px 2px 2px #f5aa27;
    }
`
