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
    margin: auto;
    text-align: center;
    h2 {
        font-size: 2.2vh;
        color:${GOLDEN_YELLOW};
    }
    .am-card{
        border-bottom: 0px;
        padding: 0;
        border-style: none !important;
    }
    .am-card-body{
        border-bottom: 0px;
        border-style: none !important;
    }
    .card-carousel-container{
        width: 90vw;
        border-top: 10px;
        max-width: 500px;
        border-style: none;
        margin: auto;
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
        font-size: 5vw;
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
        .am-button-disabled {
            color: white;
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
    .accordion-content{
        text-align: center;
        font-weight: 700;
    }
    .am-accordion-content-box{
        background-color: ${GOLDEN_YELLOW};
        border-style: none !important;
        border: none !important;
        border-top: none !important;
        padding: 10px 0px 10px 0px;
    }
    .am-accordion-header{
        background-color: ${BACKGROUND_COLOR} !important;
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
        background-color: ${BACKGROUND_COLOR};
        color: ${GREY_BLACK};
        width: 10vw;
        display: flex;
        overflow: hidden;
        max-height: 80px;
        height: 7vh;
        text-align: center;
        align-items: center;
        word-break: break-word;
        margin-right: 1vw;
        display: inline-block;
        border-radius: 10px;
        p{
            font-weight: bold;
            font-size: 1.2vh;
            padding: 30% 0px 5px 0px;
        }
    }
`

export const PokemonCardCarousel = css`
    .am-card-body{
        width: 100%;
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

export const ModalCSS = css`
    .am-modal-transparent{
        width: 20vh;
    }
    max-width: 300px;
    .am-modal-header:{
        font-weight: bold;
        border-radius: 10px;
    }
    h2{
        background-color: ${GREY_BLACK};
        color: ${GOLDEN_YELLOW};
        font-weight: bolder;
    }
    .pokemon-image{
        width: 50vw;
        max-width: 500px;
        background-image: url('/images/2gfwG.jpg');
    }
    .am-modal-content: {
        background-color: ${GOLDEN_YELLOW};
        padding-top: 0px !important;
    }
    .successful-catch-container{
        background-color: ${GOLDEN_YELLOW};
        h3{
            font-size: 2.6vw;
            font-weight: bold;
            background-color: ${GOLDEN_YELLOW};
            color: ${GREY_BLACK};
        }
    }
    .container{
        text-align: center;
        width: 100%;
        display: inline-block;
    }
    .am-button{
        margin: auto;
        width: 40%;
        display: inline-block;
        color: ${GOLDEN_YELLOW};
        background-color: ${GREY_BLACK};
    }
    .failed-catch-container{
        h1{
            color: ${GOLDEN_YELLOW};
        }
        background-color: ${GOLDEN_YELLOW};
        padding: 0 0 10px 0;
        h1{
            font-weight: bolder;
        }
    }
    .confirmation-modal-container{
        h2{
            color: ${GOLDEN_YELLOW};
        }
        background-color: ${GOLDEN_YELLOW};
        padding: 0 0 10px 0;
        h1{
            font-weight: bolder;
        }
    }
    .failed-catch-text{
        background-color: ${GREY_BLACK};
        width: 100%;
        padding: 10px;
    }
    .button-container{
        display: flex;
        justify-content: space-between;
        font-weight: bold;
    }
    width: 80vw;
    text-align: center;
    max-width: 800px;
    .button-retry{
        color: ${GOLDEN_YELLOW};
        background-color: ${GREY_BLACK};
    }
`

export const PokedexContainer = css`
    padding-bottom: 5vh;
    background-color: ${BACKGROUND_COLOR};
    .am-card-header {
        font-size: 1.4vh;
        text-align: center;
        font-weight: bolder;
        text-align: center;
        width: 100%;
        color: white;
        background-color: ${GREY_BLACK};
        border-style: none;
        border: 0px;
    }
    .am-card-header-content{
        text-align: center;
        font-weight: bolder;
        color: ${GOLDEN_YELLOW};
        margin-bottom: 0;
    }
    .am-card {
        text-align: center;
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
    .am-card-body {
        padding: 0px;
        max-width: 850px;
        border-style: none;
    }
    .empty-container{
        margin: auto;
        font-weight: bolder;
        padding: 1vw;
        h3 {
            margin-bottom: auto;
            font-size: 4vh;
            color: ${BACKGROUND_COLOR};
            font-weight: bolder;
            -webkit-text-stroke: 2px ${GREY_BLACK};
        }
    }
    .am-list-body{
        border-radius: 5px;
        background-color: ${GOLDEN_YELLOW};
    }
    .am-list{
        border-radius: 5px;
        background-color: ${GOLDEN_YELLOW};
    }
    am-list-line-wrap{
        border-style: none;
        background-color: ${GOLDEN_YELLOW};
    }
    .am-list-item {
        background-color: ${GOLDEN_YELLOW};
    }
    .am-list-body{
        background-color: ${GOLDEN_YELLOW};
        border-style: none;
    }
    .am-list-item-middle{
        border-style: none;
        padding-left: 2vw;
    }
    .am-list-line-wrap{
        padding-right: 0px !important;
    }
    .whitespace{
        background-color: ${GOLDEN_YELLOW};
    }
    .pokedex-image {
        margin: auto;
        width: 25vw;
        max-width: 250px;
        display: inline-block;
        float: left;
        padding-top: 1.2%;
        img {
            width: 100%;
            max-width: 250px;
            height: auto;
            min-height: 100%;
            border-radius: 5px;
            background-image: url('/images/2gfwG.jpg');
        }
    }
    .pokedex-info{
        padding-top: 1%;
        padding-left: 2vw;
        width: 30vw;
        max-width: 300px;
        display: inline-block;
        h5{
            font-weight: bold;
            font-size: 1.5vh;
        }
    }
    
    .pokedex-release-button{
        float: right;
        width: 20vw;
        max-width: 100px;
        padding-right: 1%;
        display: inline-block;
        .am-button {
            font-weight: bold;
            padding: 0px;
            width: auto;
            font-size: 1.5vw;
            background-color: ${GREY_BLACK};
            color: ${GOLDEN_YELLOW};
        }
    }
    .am-button-disabled {
        color: black;
    }
    .abilities-button{
        width: 40%;
        margin-top: 5%;
        color: black;
        padding: 0;
        text-align: center;
        margin-right: 5%;
        display: inline-block;
        font-size: 1vh;
        font-weight: bold;
        border-style: none;
    }
    .pokedex-types{
        vertical-align: bottom;
        height: 100%;
    }
`