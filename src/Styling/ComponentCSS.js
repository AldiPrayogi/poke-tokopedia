import {css} from "@emotion/react";
import {GOLDEN_YELLOW} from "../Constants/Color";

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
        border-color: ${GOLDEN_YELLOW};
        border-style: solid;
        border-width: 1px;
        color: ${GOLDEN_YELLOW};
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
        color: ${GOLDEN_YELLOW};
        font-family: Verdana, sans-serif;
    }
`

export const loading = css`
        margin: 20px 0;
        margin-bottom: 20px;
        padding: 30px 50px;
        text-align: center;
        background: rgba(0, 0, 0, 0.05);
        border-radius: 4px;
        background-color: white;
        width: 100%;
`

export const pokemonCarousel = css`
    // h4{
    //     padding-bottom: 4px;
    //     border-bottom: 100px;
    // }
`
