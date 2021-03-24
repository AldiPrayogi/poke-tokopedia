import {css, jsx} from "@emotion/react";

const color = '#f2e9ab';

export const homepage = css`
    background-color: #343434;
    height: auto;
    margin-bottom: 0;
    width: 100%;
    text-align: center;
    h2 {
        font-size: 2.2vh;
        color:${color};
    }
`

export const navigationButton = css`
     .am-button-small {
        font-size: 2.2vh;
        font-weight: bold;
        border-color: #f2e9ab;
        border-style: solid;
        border-width: 1px;
        background-color: black;
        border-color: #f2e9ab;
        color:#f2e9ab;
     }
`

export const pokemonCards = css`
    padding-bottom: 5vh;
    .am-card{
        margin: auto;
        background-color: black;
        border-color: #f2e9ab;
        border-style: solid;
        border-width: 1px;
        width: 50vw;
    }
`