import {css} from "@emotion/react";
import BackgroundImage from '../2gfwG.jpg';
import {GOLDEN_YELLOW} from "../Constants/Color";

export const titleContainer = css`
    background-color: #222224;
    margin-bottom:0;
`

export const homepage = css`
    background-color: #f0f0f0;
    border-bottom: 0px;
    margin-bottom: 0px;
    width: 100%;
    height: auto;
    text-align: center;
    h2 {
        font-size: 2.2vh;
        color:${GOLDEN_YELLOW};
        // color: black
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
        background-color: #222224;
    }
    .am-card-header-content{
        text-align: center;
        // color: ${GOLDEN_YELLOW};
        color: #f2cc65;
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
        margin: auto;
        background-color: #f2cc65;
        border-color: ${GOLDEN_YELLOW};
        width: 80%;
        height: auto;
    }
    .am-card-body {
        padding-top: 7px;
    }
`
export const pokemonCardsCarousel = css`
    .am-card-body{
        background-color: #f0f0f0;
    }
`