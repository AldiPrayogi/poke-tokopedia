import {
    BUG, DARK, DEFAULT, DRAGON, ELECTRIC, FAIRY,
    FIGHTING, FIRE, FLYING, GHOST, GRASS, GROUND, ICE,
    NORMAL, POISON, PSYCHIC, ROCK, STEEL, WATER
} from '../Constants/Color';

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