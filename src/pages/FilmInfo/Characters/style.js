import styled from "styled-components"

export const CharactersList = styled.div`
    display: flex;
    flex-wrap: wrap;
    color: black;
    font-weight: 500;
`

export const AllCharacters = styled.div`
    color: #000;
    margin-right: 25px;
    transition: 0.3s;
    text-decoration: none;
    cursor: pointer;
    color: black;

    :hover {
        text-shadow: 2px 2px 2px #f5aa27;
    }
`
