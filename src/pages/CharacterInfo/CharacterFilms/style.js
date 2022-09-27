import styled from "styled-components"

export const Title = styled.h2`
    margin: 25px 0;
`

export const CharacterFilm = styled.div`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: black;
    transition: 0.3s;
    cursor: pointer;
    font-weight: 700;
    letter-spacing: 2px;
    line-height: 2;
    :hover {
        text-shadow: 2px 2px 2px #f5aa27;
    }
`