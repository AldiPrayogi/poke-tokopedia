import {css} from "@emotion/react";
import {GOLDEN_YELLOW, GREY_BLACK} from "../Constants/Color";

export const topBarCSS = css`
    color: black;
    width: 100%;
    border: 0px;
    padding: auto;
    min-width: 200px;
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
         background-color: ${GREY_BLACK};
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
        background-color: ${GREY_BLACK};
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

export const CarouselComponentCSS = css`
    width: "100%";
    textAlign: center
    .carousel-container{
        textAlign: center
    }
    .pokemon-name-header{
        background-color: ${GREY_BLACK};
        width: 110%
    }
    .pokemon-name{
        color: ${GOLDEN_YELLOW};
        font-size: 2.7vh;
        width: 100%;
        padding-right: 9%;
    }
    .am-carousel-wrap{
        margin-top: 100px important!;
    }
    img{
        height: 25vh;
        vertical-align: top;
        padding-right:2%;
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
        margin-top: 5%;
        margin-bottom: 5%;
        text-align: center;
        border-radius: 4px;
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
