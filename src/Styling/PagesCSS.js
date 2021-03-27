import {css} from "@emotion/react";
import {BACKGROUND_COLOR, GOLDEN_YELLOW, GREY_BLACK} from "../Constants/Color";

export const TitleContainerCSS = css`
    background-color: ${GREY_BLACK};
    margin-bottom:0;
    h2 {
        font-weight: 900;
    }
    height-min: 130px;
`

export const HomePageCSS = css`
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

export const PokemonCardsCSS = css`
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
        width: auto;
        padding: 0px 1vw 0px 1vw;
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
        background-image: url('/images/2gfwG.jpg');
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
        width: auto;
        max-width: 850px;
        Span {
            width: auto;
        }
    }
    .pokemonImage{
        width: 50vh;
        max-width: 80%;
    }
    .am-card {
        border-radius: 2vh;
        margin: auto;
        background-color: ${GOLDEN_YELLOW};
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
        padding: 0px !important;
        border-style: 10px !important;
    }
    .subTitle{
        background-color: ${BACKGROUND_COLOR};
        text-align: center;
        font-weight: 700;
        font-size: 150%;
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
        border-radius: 10px;
    }
    .moveContainer{
        width: 100%;
        text-align: center;
        font-size: 1.5vh;
        word-break: break-word;
        overflow: auto;
    }
`

export const PokemonCardCarousel = css`
    .am-card-body{
        min-height: 50vh;
        background-color: ${BACKGROUND_COLOR};
    }
`

export const PaginationContainer = css`
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
    .contentContainer{
        overflow: hidden;
    }
    h5{
        align-text: center;
        font-size: 90%;
        font-weight: bold;
        color: ${GOLDEN_YELLOW};
        background-color: ${GREY_BLACK};
    }
    .owned-amount{
        align-text: center;
        font-size: 70%;
        font-weight: normal;
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

export const PokemonListPageCSS = css`
    height-min: 130px;
    background-color: ${BACKGROUND_COLOR};
    text-align: center;
    margin: 0px;
    Span{
        font-weight: bold;
    }
    .pokemonListTitle {
        background-color: ${GREY_BLACK};
        h2 {
            font-size: 2.2vh;
            font-weight:900;
            color:${GOLDEN_YELLOW};
        }
    }
`

export const PokemonDetailPageCSS = css`
    height-min: 130px;
    background-color: ${BACKGROUND_COLOR};
    text-align: center;
    margin: 0px;
    Span{
        font-weight: bold;
    }
    .pokemonListTitle {
        background-color: ${GREY_BLACK};
        h2 {
            font-size: 2.2vh;
            font-weight:900;
            color:${GOLDEN_YELLOW};
        }
    }
`

export const CatchModalCSS = css`
    .am-modal-header:{
        font-weight: bold;
    }
    .pokemon-image{
        width: 50vw;
        max-width: 500px;
        background-image: url('/images/2gfwG.jpg');
    }
    Button{
        width: 30%;
        display: inline-block;
    }
    h3{
        font-size: 2.6vw;
        font-weight: bold;
        background-color: ${GREY_BLACK};
        color: ${GOLDEN_YELLOW};
    }
    .button-throw{
        width: 100%;
        display: inline-block;
        color: ${GOLDEN_YELLOW};
        background-color: ${GREY_BLACK};
    }
    .container{
        text-align: center;
        width: 100%;
        display: inline-block;
    }
    .button-close{
        width: 50%;
        display: inline-block;
        color: ${GOLDEN_YELLOW};
        background-color: ${GREY_BLACK};
    }
    width: 80vw;
    text-align: center;
    max-width: 800px;
    .button-retry{
        color: ${GOLDEN_YELLOW};
        background-color: ${GREY_BLACK};
    }
`