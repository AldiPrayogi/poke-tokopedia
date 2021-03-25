import {css} from "@emotion/react";
import BackgroundImage from '../2gfwG.jpg';
import {FIGHTING, GOLDEN_YELLOW} from "../Constants/Color";

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
    // max-width: 850px;
    text-align: center;
    h2 {
        font-size: 2.2vh;
        color:${GOLDEN_YELLOW};
    }
`

export const pokemonCards = css`
    padding-bottom: 5vh;
    .am-card-header {
        font-size: 5vw;
        font-weight: bolder;
        width: 100%;
        color: white;
        border-radius: 10px;
        background-color: #222224;
        max-width: 720px;
        text-align: center;
    }
    .am-card-header-content{
        color: #f2cc65;
        border-style: none;
        font-size: 4vw;
        margin: 0px;
        text-align: center;
        border-radius: 20px;
    }
    h3{
        font-weight: bolder;
        font-size: 3vw;
        margin-top: 0;
        max-width: 720px;
    }
    .catchPokemonButton{
        background-color: white;
        width: 20vw;
        max-width: 120px;
        text-align: center;
        margin-right: 1vw;
        display: inline-block;
        font-size: 70%;
        font-weight: bold;
        border-style: none;
    }
    .cardContainer{
        width: 69vw;
        margin: auto;
        max-width: 720px;
    }
    .pokemonImageContainer{
        background-image: url('${BackgroundImage}');
        border-radius: 15px;
        text-align: center;
        align-items: center;
        width: 100%;
        max-height: 614px;
    }
    .pokemonDetailContainer{
        text-align: left;
        max-width: 850px;
    }
    .pokemonDetailTypeContainer{
        text-align: center;
        max-width: 850px;
    }
    .pokemonImage{
        width: 65vh;
        max-width: 100%;
        // height: 40%;
    }
    .am-card {
        margin: auto;
        background-color: #f2cc65;
        border-color: ${GOLDEN_YELLOW};
        width: 80%;
        height: auto;
        max-width: 850px;
    }
    .am-card-body {
        padding-top: 7px;
        border-style: none;
        max-width: 850px;
    }
`
export const pokemonCardsCarousel = css`
    .am-card-body{
        background-color: #f0f0f0;
    }
`