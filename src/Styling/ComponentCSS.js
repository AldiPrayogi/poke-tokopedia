import {css} from "@emotion/react";
import {GOLDEN_YELLOW, GREY_BLACK} from "../Constants/Color";

export const TopBarCSS = css`
    color: black;
    width: 100%;
    border: 0px;
    padding: auto;
    min-width: 200px;
    height: auto;
    text-align: center;
    background-image: linear-gradient(75deg, #bd4949, #7b2916);
`

export const NavigationButtonContainer = css`
    text-align: center;
    margin-bottom: 0;
`

export const NavigationButtonCSS = css`
     padding: 10vh 0 10vh 0;
     border: auto;
     display: inline-block;
     min-width: 60px;
     a {
         background-color: ${GREY_BLACK};
         border-radius: 2vh;
         border-color: ${GOLDEN_YELLOW};
         border-style: solid;
         border-width: 1px;
         color: ${GOLDEN_YELLOW};
         padding: 2.5vh;
         font-weight: bold;
         font-size: 1.2vh;
     }
`

export const ContainerGithubCSS = css`
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

export const ContainerPokeballCSS = css`
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

export const LoadingCSS = css`
        margin-top: 5%;
        margin-bottom: 5%;
        text-align: center;
        border-radius: 4px;
        width: 100%;
`

export const PokemonCarouselCSS = css`
    // .pokemonNameContainer {
    //     background-color: black;
    // }
    // h4 {
    //     font-size: 100px;
    //     color: white;
    // }
`

export const NicknameFormCSS = css`
    background-color: ${GREY_BLACK};
    h4{
        color: ${GOLDEN_YELLOW};
        font-weight: bold;
    }
    .error-message{
        margin-top: 0.7em;
        color: red;
    }
`
