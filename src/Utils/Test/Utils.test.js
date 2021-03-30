import {checkBackgroundColorPokedex, checkBackgroundColor, checkType} from '../Utils';
import {
    BUG, DARK, DEFAULT, DRAGON, ELECTRIC, FAIRY,
    FIGHTING, FIRE, FLYING, GHOST, GRASS, GROUND, ICE,
    NORMAL, POISON, PSYCHIC, ROCK, STEEL, WATER
} from '../../Constants/Color';

describe('Utils', () => {
    describe('checkBackgroundColor', () => {
        it('should return CSS based on color', () => {
            const expectedResult = '#DFC06D';

            const actualResult = checkBackgroundColor('ground');

            expect(actualResult.styles).toContain(expectedResult);
        });
    });
    describe('checkBackgroundColorPokedex', () => {
        it('should return CSS based on color', () => {
            const expectedResult = '#DFC06D';

            const actualResult = checkBackgroundColorPokedex('ground');

            expect(actualResult.styles).toContain(expectedResult);
        });
    });
    describe('checkColor', () => {
        it('should return color Normal if type is normal', () => {
            const expectedResult = NORMAL;

            const actualResult = checkType('normal');

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return color Fighting if type is fighting', () => {
            const expectedResult = FIGHTING;

            const actualResult = checkType('fighting');

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return color Flying if type is flying', () => {
            const expectedResult = FLYING;

            const actualResult = checkType('flying');

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return color Poison if type is posiong', () => {
            const expectedResult = POISON;

            const actualResult = checkType('poison');

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return color Ground if type is ground', () => {
            const expectedResult = GROUND;

            const actualResult = checkType('ground');

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return color Rock if type is rock', () => {
            const expectedResult = ROCK;

            const actualResult = checkType('rock');

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return color Bug if type is bug', () => {
            const expectedResult = BUG;

            const actualResult = checkType('bug');

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return color Ghost if type is ghost', () => {
            const expectedResult = GHOST;

            const actualResult = checkType('ghost');

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return color Steel if type is steel', () => {
            const expectedResult = STEEL;

            const actualResult = checkType('steel');

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return color Fire if type is fire', () => {
            const expectedResult = FIRE;

            const actualResult = checkType('fire');

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return color Water if type is water', () => {
            const expectedResult = WATER;

            const actualResult = checkType('water');

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return color Grass if type is grass', () => {
            const expectedResult = GRASS;

            const actualResult = checkType('grass');

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return color Electric if type is electric', () => {
            const expectedResult = ELECTRIC;

            const actualResult = checkType('electric');

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return color Psychic if type is psychic', () => {
            const expectedResult = PSYCHIC;

            const actualResult = checkType('psychic');

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return color Dragon if type is dragon', () => {
            const expectedResult = DRAGON;

            const actualResult = checkType('dragon');

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return color Dark if type is dark', () => {
            const expectedResult = DARK;

            const actualResult = checkType('dark');

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return color Fairy if type is fairy', () => {
            const expectedResult = FAIRY;

            const actualResult = checkType('fairy');

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return color Ice if type is ice', () => {
            const expectedResult = ICE;

            const actualResult = checkType('ice');

            expect(actualResult).toEqual(expectedResult);
        });

        it('should return color Bug Default type is default', () => {
            const expectedResult = DEFAULT;

            const actualResult = checkType('default');

            expect(actualResult).toEqual(expectedResult);
        });
    });
});