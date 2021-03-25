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

export const navigationButtonContainer = css`
    text-align: center;
    margin-bottom: 0;
`

export const navigationButton = css`
     padding: 10vh 0 10vh 0;
     border: auto;
     display: inline-block;
     a {
         background-color: #222224;
         border-radius: 2vh;
         border-color: ${GOLDEN_YELLOW};
         border-style: solid;
         border-width: 1px;
         color: ${GOLDEN_YELLOW};
         padding: 2.5vh;
         font-weight: bold;
         font-size: 1.5vh;
     }
`

export const containerGithub = css`
    padding: 5vh 0 2vh 0;
    text-align: center;
    a {
        background-color: #222224;
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
        font-weight: bold;
        font-size: 6.5vh;
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
    // .pokemonNameContainer {
    //     background-color: black;
    // }
    // h4 {
    //     font-size: 100px;
    //     color: white;
    // }
`
