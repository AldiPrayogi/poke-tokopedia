/** @jsxImportSource @emotion/react */

import React, {useState} from 'react';
import {WhiteSpace, Card, WingBlank, SearchBar} from "antd-mobile";
import { HomePageCSS, TitleContainerCSS, PokemonCardCarousel} from '../Styling/PagesCSS'
import {PokemonCarousel} from "../Components/PokemonCarousel";
import { gql, useQuery } from '@apollo/client';
import {Loading} from "../Components/Loading";
import {PokemonData} from '../Fixtures/PokemonData';
import {useHistory} from 'react-router-dom';

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
    const [searchValue, setSearchValue] = useState('');

    const history = useHistory();

    const { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: gqlVariables,
    });

    if (error) return `Error! ${error.message}`;

    let pokemonData = PokemonData;

    if (!loading) pokemonData = data.pokemons.results;

    const onChange = (value) => {
        setSearchValue(value)
        console.log(value);
    }

    const onSubmit = (value) => {
        history.push(`/pokemon-detail/${value.toLowerCase()}`);
    }

    return (
        <div>
            <div css={HomePageCSS}>
                <div css={TitleContainerCSS}>
                    <WhiteSpace size='xl'/>
                    <h2>RANDOM POKEMONS OF THE DAY</h2>
                    <WhiteSpace size='xl'/>
                </div>
                <WhiteSpace size='xl'/>
                <WingBlank size='lg'>
                    <div className='searchbar'>
                        <SearchBar
                            placeholder='Search Pokemon'
                            maxLength='20'
                            onChange={onChange}
                            defaultValue={searchValue}
                            onSubmit={(searchValue) => onSubmit(searchValue)}
                            cancelText='Cancel'
                        />
                    </div>
                </WingBlank>
                <WhiteSpace size='xl'/>
                <div className='card-carousel-container'>
                    <WingBlank>
                        <div css={PokemonCardCarousel}>
                            <Card>
                                <Card.Body>
                                    {loading ?
                                        <div style={{minHeight: '30vh'}}><Loading /></div>
                                        :
                                        <PokemonCarousel data={pokemonData}/>
                                    }
                                </Card.Body>
                            </Card>
                        </div>
                    </WingBlank>
                </div>
            </div>
        </div>
    );
}
