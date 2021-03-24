import {css, jsx} from "@emotion/react";
import BackgroundImage from '../2gfwG.jpg';
import {GOLDEN_YELLOW} from "../Constants/Color";

export const homepage = css`
    background-color: #343434;
    margin-bottom: 0px;
    width: 100%;
    height: auto;
    text-align: center;
    h2 {
        font-size: 2.2vh;
        color:${GOLDEN_YELLOW};
    }
`

export const navigationButton = css`
     .am-button-small {
        font-size: 2.2vh;
        font-weight: bold;
        border-style: solid;
        border-width: 1px;
        background-color: black;
        border-color: ${GOLDEN_YELLOW};
        color:#f2e9ab;
     }
`

export const pokemonCards = css`
    padding-bottom: 5vh;
    .am-card-header {
        font-size: 5vw;
        font-weight: bolder;
        margin:auto;
        width: 100%;
        color: white;
        border-radius: 10px;
        background-color: #343434;
    }
    .am-card-header-content{
        text-align: center;
        color: ${GOLDEN_YELLOW};
        margin-left: 33%;
        border-radius: 20px;
    }
    h3{
        font-weight: bolder;
        font-size: 3vw;
        margin-top: 0;
    }
    .cardContainer{
        width: 69vw;
        margin-left: auto;
        margin-right: auto
    }
    .pokemonImageContainer{
        background-image: url('${BackgroundImage}');
        border-radius: 15px;
    }
    .pokemonDetailContainer{
        text-align: left;
    }
    .pokemonDetailTypeContainer{
        text-align: center;
    }
    .pokemonImage{
        width: 40vh;
        margin: auto;
    }
    .am-card {
        height: 100vh;
        margin: auto;
        background-color: ${GOLDEN_YELLOW};
        border-color: ${GOLDEN_YELLOW};
        width: 80%;
    }
    .am-card-body {
        padding-top: 7px;
    }
`