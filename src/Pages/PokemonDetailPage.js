/** @jsxImportSource @emotion/react */

import React, {useState} from 'react';
import {Card, WingBlank, WhiteSpace, Button} from "antd-mobile";
import {TopBar} from "../Components/TopBar";
import {homepage, pokemonCards} from '../Styling/PagesCSS'
import {gql} from "@apollo/client";
import {css, jsx} from "@emotion/react";
import {checkType} from '../Utils/Utils';

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

const checkBackgroundColor = (type) => {
    const backgroundColor =  checkType(type)

    return css`
        background-color: ${backgroundColor};
        width: 20vw;
        color: white;
        max-width: 120px;
        text-align: center;
        margin-right: 1vw;
        display: inline-block;
        font-size: 70%;
        font-weight: bold;
        border-style: none;
    `
}

export const PokemonDetailPage = (id) => {

    const data = {
        name: 'Bulbasour',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        nickName: 'Bulb',
        type: [
            'grass', 'poison', 'fighting', 'flying', 'ice'
        ],
        gender: 'Male',
        moves: [
            'Tackle', 'Snare', 'Blast'
        ]
    };

    return (
        <div>
            <div>
                <TopBar/>
            </div>
            <div css={homepage} id='Details'>
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WingBlank size="lg" css={pokemonCards}>
                    <WhiteSpace size="lg" />
                    <Card>
                        <div className='cardContainer'>
                            <WhiteSpace size='lg'/>
                            <div className='am-card-header'>
                                <h3 className='am-card-header-content'>
                                    POKEMON
                                </h3>
                            </div>
                            <Card.Body>
                                <h3>{(data.name).toUpperCase()}</h3>
                                <div className='pokemonImageContainer'>
                                    <img src={data.image} className='pokemonImage'/>
                                </div>
                                <div className='pokemonDetailContainer'>
                                    <WhiteSpace size='md'/>
                                    <h4 className='subTitle'>TYPES</h4>
                                    <WhiteSpace size='md'/>
                                    <div className='pokemonDetailTypeContainer'>
                                        {
                                            data.type.map(i => (
                                                <Button css={checkBackgroundColor(i)}>{i.toUpperCase()}</Button>
                                            ))
                                        }
                                    </div>
                                    <WhiteSpace size='md'/>
                                    <h4 className='subTitle'>MOVES</h4>
                                    <WhiteSpace size='md'/>
                                    <div className='pokemonDetailMovesContainer'>
                                        {
                                            data.moves.map(i => (
                                                <Button css={checkBackgroundColor(i)}>{i.toUpperCase()}</Button>
                                            ))
                                        }
                                    </div>
                                    <WhiteSpace size='md'/>
                                    <Button className='catchPokemonButton'>CATCH</Button>
                                    <WhiteSpace size='md'/>
                                </div>
                            </Card.Body>
                        </div>
                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
            </div>
        </div>
    );
}
