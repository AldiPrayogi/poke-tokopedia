/** @jsxImportSource @emotion/react */

import React from 'react';
import {Card, WingBlank, WhiteSpace, Button, Accordion} from "antd-mobile";
import {TopBar} from "../Components/TopBar";
import {pokemonCards, pokemonListPage} from '../Styling/PagesCSS'
import {gql, useQuery} from "@apollo/client";
import {css} from "@emotion/react";
import {checkType} from '../Utils/Utils';
import {useLocation} from 'react-router-dom';
import {Loading} from "../Components/Loading";
const ls = require('local-storage');

const GET_POKEMONS_DETAIL = gql`
  query pokemon($name: String!) {
  pokemon(name: $name) {
    id
    name
    abilities {
      ability {
        name
      }
    }
    moves {
      move {
        name
      }
    }
    types {
      type {
        name
      }
    }
    sprites {
        front_default
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
        font-size: 100%;
        font-weight: bold;
        border-style: none;
    `
}

export const PokemonDetailPage = () => {
    // const location = useLocation();
    //
    // let pokemonName =  location ? location.state.pokemonName : window.location.href;

    let pokemonName = ls.get('name');
    console.log(pokemonName);

    const { loading, error, data } = useQuery(GET_POKEMONS_DETAIL, {
        variables: {name: pokemonName}
    });
    if (error) return `Error! ${error.message}`;

    let pokemonData = {
        name: 'Pokemon',
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
        },
        nickName: 'Bulb',
        types: [
            {
                type:{
                    name: 'abc'
                }
            }
        ],
        gender: 'Male',
        moves: [
            {
                move: {
                    name: 'abc'
                }
            }
        ],
        pokemon: {
            name: 'pokemon'
        }
    };

    if(!loading) pokemonData = data.pokemon;

    console.log(window.location.href);
    return (
        <div>
            <div>
                <TopBar/>
            </div>
            <div css={pokemonListPage}>
                    <div className='pokemonListTitle'>
                        <WhiteSpace size='xl'/>
                        <h2>POKEMON DETAIL</h2>
                        <WhiteSpace size='xl'/>
                    </div>
                    <WhiteSpace size="lg" />
                <WingBlank size='sm' css={pokemonCards}>
                    <Card>
                        <div className='cardContainer'>
                            <WhiteSpace size='xl'/>
                            <WhiteSpace size='md'/>
                            <div className='am-card-header'>
                                <h3 className='am-card-header-content'>
                                    POKEMON
                                </h3>
                            </div>
                            <Card.Body>
                                {loading ? <Loading/> :
                                    <div>
                                        <h3 className='pokemonName'>{(pokemonData.name).toUpperCase()}</h3>
                                        <div className='pokemonImageContainer'>
                                            <img src={pokemonData.sprites.front_default} alt='Pokemon' className='pokemonImage'/>
                                        </div>
                                        <div className='pokemonDetailContainer'>
                                            <WhiteSpace size='md'/>
                                            <h4 className='subTitle'>TYPES</h4>
                                            <WhiteSpace size='md'/>
                                            <div className='pokemonDetailTypeContainer'>
                                                {
                                                    pokemonData.types.map(index => (
                                                        <Button css={checkBackgroundColor(index.type.name)}>{index.type.name.toUpperCase()}</Button>
                                                    ))
                                                }
                                            </div>
                                            <WhiteSpace size='md'/>
                                            <WhiteSpace size='md'/>
                                            <Accordion defaultActiveKey="0" >
                                                <Accordion.Panel header='MOVES' className='movesAccordion'>
                                                        {
                                                            pokemonData.moves.map(index => (
                                                                <Button className='buttonMoves'>
                                                                    <div className='moveContainer'>
                                                                        {index.move.name.toUpperCase()}
                                                                    </div>
                                                                </Button>
                                                            ))
                                                        }
                                                </Accordion.Panel>
                                            </Accordion>
                                            <WhiteSpace size='xl'/>
                                            <Button className='catchPokemonButton' id='Details'>CATCH</Button>
                                            <WhiteSpace size='md'/>
                                        </div>
                                    </div>
                                }
                            </Card.Body>
                        </div>
                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
            </div>
        </div>
    );
}
