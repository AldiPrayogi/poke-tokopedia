import {css} from "@emotion/react";

export const topBarCSS = css`
    color: black;
    width: 100%;
    border: 0px;
    padding: auto;
    height: auto;
    background-image: linear-gradient(75deg, #bd4949, #7b2916);
`
export const containerGithub = css`
    padding: 10vh 0 10vh 0;
    text-align: center;
    a {
        background-color: black;
        border-radius: 2vh;
        border-color: #f2e9ab;
        border-style: solid;
        border-width: 1px;
        color: #f2e9ab;
        padding: 2.5vh;
        font-weight: bold;
        font-size: 1.8vh;
    }
`

export const containerPokeball = css`
    width: 100%;
    padding: 6vh 0 2vh 0;
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    h2{
        text-align: center;
        font-style: italic;
        font-size: 7vh;
        padding-top: 5vh;
        margin: auto;
        color: #f2e9ab;
        font-family: Verdana, sans-serif;
    }
`

export const pokemonCarousel = css`
    h4{
        padding-bottom: 4px;
        border-bottom: 100px;
    }
`
