/** @jsxImportSource @emotion/react */

import React from 'react';
import {WhiteSpace, Card} from "antd-mobile";
import {TopBar} from "../Components/TopBar";
import { homepage, titleContainer, pokemonCardsCarousel} from '../Styling/PagesCSS'
import {PokemonCarousel} from "../Components/PokemonCarousel";
import { gql, useQuery } from '@apollo/client';
import {Loading} from "../Components/Loading";

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        url
        name
        image
      }
    }
  }
`;

const gqlVariables = {
    limit: 10,
    offset: Math.floor((Math.random() * 1108) + 1)
};
const dataTemp = [
    {
        name: 'pokemon',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    },
    {
        name: 'pokemon',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
    },
    {
        name: 'pokemon',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
        pokemons: 'abc'
    },
];

export const HomePage = () => {
    const { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: gqlVariables,
    });

    if (error) return `Error! ${error.message}`;

    let pokemonData = dataTemp;

    if(!loading) pokemonData = data.pokemons.results;

    return (
        <div>
            <div>
                <TopBar/>
            </div>
            <div css={homepage}>
                <div css={titleContainer}>
                    <WhiteSpace size='xl'/>
                    <h2>RANDOM POKEMONS OF THE DAY</h2>
                    <WhiteSpace size='xl'/>
                </div>
                <div css={pokemonCardsCarousel}>
                    <Card>
                        <Card.Body>
                            {loading ? <Loading /> : <PokemonCarousel data={pokemonData}/>}
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}
