/** @jsxImportSource @emotion/react */

import React, {useState} from 'react';
import {Button, WhiteSpace, WingBlank, Carousel} from "antd-mobile";
import { useHistory } from 'react-router-dom';
import {TopBar} from "../Components/TopBar";
import { homepage, navigationButton,pokemonCards} from '../Styling/PagesCSS'
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
        name: 'Bulbasour',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    },
    {
        name: 'Ivysaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
    },
    {
        name: 'Venusaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
    }
];

export const HomePage = () => {

    const history = useHistory();

    const { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: gqlVariables,
    });
    if (error) return `Error! ${error.message}`;

    let pokemonData = dataTemp;

    if(!loading) pokemonData = data.pokemons.results;

    const handleListClick =  () => {
        history.push('/pokemon-list');
    }

    const handlePokedexClick = () => {
        history.push('/pokedex');
    }
    console.log(pokemonData)
    return (
        <div>
            <div>
                <TopBar/>
            </div>
            <div css={homepage}>
                <div css={navigationButton}>
                    <WhiteSpace size='xl'/>
                    <WhiteSpace size='xl'/>
                    <WhiteSpace size='l'/>
                    <Button inline size="small" onClick={handleListClick} style={{marginRight: '8vw'} }>Pokemon List</Button>
                    <Button inline size="small" onClick={handlePokedexClick}>Your Pokedex</Button>
                </div>
                <WhiteSpace size='xl'/>
                <h2>Random Pokemons of the day</h2>
                <WhiteSpace size='xl'/>
                <div css={pokemonCards}>
                    {/*<PokemonCarousel data={pokemonData}/>*/}
                    {loading ? <Loading /> : <PokemonCarousel data={pokemonData}/>}
                    {/*<Loading/>*/}
                </div>
            </div>
        </div>
    );
}
