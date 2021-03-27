import {
    BUG, DARK, DEFAULT, DRAGON, ELECTRIC, FAIRY,
    FIGHTING, FIRE, FLYING, GHOST, GRASS, GROUND, ICE,
    NORMAL, POISON, PSYCHIC, ROCK, STEEL, WATER
} from '../Constants/Color';
import {css} from "@emotion/react";

export const checkType = (type) => {
    switch (type){
        case 'normal':
            return NORMAL
        case 'fighting':
            return FIGHTING
        case 'flying':
            return FLYING
        case 'poison':
            return POISON
        case 'ground':
            return GROUND
        case 'rock':
            return ROCK
        case 'bug':
            return BUG
        case 'ghost':
            return GHOST
        case 'steel':
            return STEEL
        case 'fire':
            return FIRE
        case 'water':
            return WATER
        case 'grass':
            return GRASS
        case 'electric':
            return ELECTRIC
        case 'psychic':
            return PSYCHIC
        case 'dragon':
            return DRAGON
        case 'dark':
            return DARK
        case 'fairy':
            return FAIRY
        case 'ice':
            return ICE
        default:
            return DEFAULT
    }
}

export const checkBackgroundColor = (type) => {
    const backgroundColor = checkType(type)

    return css`
        background-color: ${backgroundColor};
        width: 25vw;
        color: black;
        max-width: 120px;
        padding: 0;
        text-align: center;
        margin-right: 1vw;
        display: inline-block;
        font-size: 100%;
        font-weight: bold;
        border-style: none;
    `
}

export const checkBackgroundColorPokedex = (type) => {
    const backgroundColor = checkType(type)

    return css`
        background-color: ${backgroundColor};
        width: 40%;
        margin-left: 5%;
        margin-top: 5%;
        color: black;
        padding: 0;
        text-align: center;
        margin-right: 5%;
        display: inline-block;
        font-size: 1vh;
        font-weight: bold;
        border-style: none;
    `
}

export const FIRST_TEXT = 'YOU THROW A POKEBALL....';