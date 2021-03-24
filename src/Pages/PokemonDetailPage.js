/** @jsxImportSource @emotion/react */

import React, {useState} from 'react';
import {Card, WingBlank, WhiteSpace} from "antd-mobile";
import {TopBar} from "../Components/TopBar";
import { homepage, pokemonCards} from '../Styling/PagesCSS'
import {gql} from "@apollo/client";

const GET_POKEMONS_DETAIL = gql`
  query pokemons($id: Int) {
    pokemons(id: $id) {
      results {
        id
        url
        name
        image
      }
    }
  }
`;

export const PokemonDetailPage = (id) => {

    const data = {
        name: 'Bulbasour',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        nickName: 'Bulb',
        type: 'Grass',
        gender: 'Male'
    };
    //
    // const history = useHistory();
    //
    // const handleListClick =  () => {
    //     history.push('/pokemon-list');
    // }

    return (
        <div>
            <div>
                <TopBar/>
            </div>
            <div css={homepage}>
                <WingBlank size="lg" css={pokemonCards}>
                    <WhiteSpace size="lg" />
                    <Card>
                        <div className='cardContainer'>
                            <WhiteSpace size='md'/>
                            <Card.Header
                                title='POKEMON'
                            />
                            <Card.Body>
                                <h3>{(data.name).toUpperCase()}</h3>
                                <div className='pokemonImageContainer'>
                                    <img src={data.image} className='pokemonImage'/>
                                </div>
                            </Card.Body>
                            <Card.Body>
                                <div className='pokemonImageContainer'>
                                </div>
                            </Card.Body>
                            <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                        </div>
                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
            </div>
        </div>
    );
}
