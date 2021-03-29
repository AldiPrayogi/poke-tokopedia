/** @jsxImportSource @emotion/react */

import React from 'react';
import {WhiteSpace, Card, WingBlank} from "antd-mobile";
import {TopBar} from "../Components/TopBar";
import { HomePageCSS, TitleContainerCSS, PokemonCardCarousel} from '../Styling/PagesCSS'
import {PokemonCarousel} from "../Components/PokemonCarousel";
import { gql, useQuery } from '@apollo/client';
import {Loading} from "../Components/Loading";
import {PokemonData} from '../Fixtures/PokemonData';

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

export const HomePage = () => {
    const { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: gqlVariables,
    });

    if (error) return `Error! ${error.message}`;

    let pokemonData = PokemonData;

    if (!loading) pokemonData = data.pokemons.results;

    return (
        <div>
            <div>
                <TopBar/>
            </div>
            <div css={HomePageCSS}>
                <div css={TitleContainerCSS}>
                    <WhiteSpace size='xl'/>
                    <h2>RANDOM POKEMONS OF THE DAY</h2>
                    <WhiteSpace size='xl'/>
                </div>
                <WhiteSpace size='xl'/>
                <div className='card-carousel-container'>
                    <WingBlank>
                        <div css={PokemonCardCarousel}>
                            <Card>
                                <Card.Body>
                                    {loading ? <div style={{minHeight: '30vh'}}><Loading /></div> : <PokemonCarousel data={pokemonData}/>}
                                </Card.Body>
                            </Card>
                        </div>
                    </WingBlank>
                </div>
            </div>
        </div>
    );
}
