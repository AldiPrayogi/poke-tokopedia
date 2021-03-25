import {css} from "@emotion/react";
import BackgroundImage from '../Assets/2gfwG.jpg';
import {BACKGROUND_COLOR, FIGHTING, GOLDEN_YELLOW, GREY_BLACK} from "../Constants/Color";

export const titleContainer = css`
    background-color: ${GREY_BLACK};
    margin-bottom:0;
`

export const homepage = css`
    background-color: ${BACKGROUND_COLOR};
    width: 100%;
    height: auto;
    padding: 0;
    text-align: center;
    h2 {
        font-size: 2.2vh;
        color:${GOLDEN_YELLOW};
    }
    .am-card{
        border-bottom: 0px;
        padding: 0;
    }
`

export const pokemonCards = css`
    padding-bottom: 5vh;
    background-color: ${BACKGROUND_COLOR};
    .am-card-header {
        font-size: 5vw;
        font-weight: bolder;
        width: 100%;
        color: white;
        border-radius: 10px;
        background-color: ${GREY_BLACK};
        max-width: 720px;
        text-align: center;
        border-style: none;
        border: 0px;
    }
    .am-card-header-content{
        color: #f2cc65;
        border-style: none;
        font-size: 20px;
        margin: 0px;
        text-align: center;
        border-radius: 20px;
        border-style: none;
        border: 0px;
    }
    .pokemonName{
        font-weight: 900;
        font-size: 5vh;
        margin-top: 0;
        max-width: 720px;
    }
    .catchPokemonButton{
        background-color: ${GREY_BLACK};
        width: 20vw;
        color: ${GOLDEN_YELLOW};
        max-width: 120px;
        text-align: center;
        margin-right: 1vw;
        display: inline-block;
        font-size: 70%;
        font-weight: bold;
        border-style: none;
    }
    .cardContainer{
        width: 72vw;
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
        width: 50vh;
        max-width: 80%;
    }
    .am-card {
        margin: auto;
        background-color: #f2cc65;
        border-style: ridge;
        border-color: blue;
        border-width: 1vw;
        border-color: ${GOLDEN_YELLOW};
        width: 90%;
        height: auto;
        max-width: 850px;
    }
    .movesAccordion{
        text-align: center;
        font-weight: 700;
    }
    .am-accordion-content-box{
        background-color: ${GOLDEN_YELLOW};
        border-style: none !important;
        border: none !important;
        border-top: none !important;
        padding: 10px;
    }
    .am-accordion-header{
        background-color: ${BACKGROUND_COLOR} !important;
        border: none !important;
        border-style: 10px !important;
    }
    .subTitle{
        background-color: ${BACKGROUND_COLOR};
        text-align: center;
        font-weight: 700;
        font-size: 2.5vh;
        height: 20%;
    }
    .am-card-body {
        padding: 0px;
        max-width: 850px;
    }
    .pokemonDetailMovesContainer{
        text-align: center;
    }
    .buttonMoves{
        background-color: ${BACKGROUND_COLOR};
        color: ${GREY_BLACK};
        width: 15vw;
        max-width: 100px;
        text-align: center;
        margin-right: 1vw;
        display: inline-block;
        padding: 0px 1% 0px 1%;
        font-size: 1.7vh;
        overflow: auto;
        border-radius: 10px;
        text-overflow: clip !important;
        border-style: none;
        word-break: break-word !important; 
    }
`
export const pokemonCardsCarousel = css`
    .am-card-body{
        min-height: 50vh;
        background-color: ${BACKGROUND_COLOR};
    }
`

export const paginationContainer = css`
    min-height: 70vh;
    background-color: ${BACKGROUND_COLOR};
    .am-card-body {
        background-color: ${BACKGROUND_COLOR};
        width: 100%;
        border-style: none;
        max-width: 850px;
        margin: auto;
    }
    .am-grid-item{
        border-style: none;
        background-color: ${BACKGROUND_COLOR};
        width: 20%;
    }
    .gridContainer{
        margin: auto;
        text-align: center;
        min-height: 20%;
    }
    h5{
        align-text: center;
        font-size: 75%;
        font-weight: bold;
        color: ${GOLDEN_YELLOW};
        background-color: ${GREY_BLACK};
    }
    img {
        width: 100%;
        min-height: 20%;
    }
    .am-card {
        padding: 0px;
    }
    .am-button {
        background-color: ${GREY_BLACK};
        color: ${GOLDEN_YELLOW};
    }
`

export const pokemonListPage = css`
    background-color: ${BACKGROUND_COLOR};
    text-align: center;
    margin: 0px;
    Span{
        font-weight: bold;
    }
    .pokemonListTitle {
        background-color: ${GREY_BLACK};   
        h2{
            font-weight: bold;
            color: ${GOLDEN_YELLOW};
        }
    }
`