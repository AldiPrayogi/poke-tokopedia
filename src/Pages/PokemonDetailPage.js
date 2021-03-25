/** @jsxImportSource @emotion/react */

import React from 'react';
import {Card, WingBlank, WhiteSpace, Button, Accordion, List} from "antd-mobile";
import {TopBar} from "../Components/TopBar";
import {homepage, pokemonCards} from '../Styling/PagesCSS'
import {gql, useQuery} from "@apollo/client";
import {css} from "@emotion/react";
import {checkType} from '../Utils/Utils';
import {useLocation} from 'react-router-dom';
import {Loading} from "../Components/Loading";
import {GREY_BLACK} from "../Constants/Color";

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
    const location = useLocation();
    const pokemonName = location.state.pokemonName;

    const { loading, error, data } = useQuery(GET_POKEMONS_DETAIL, {
        variables: {name: pokemonName}
    });
    if (error) return `Error! ${error.message}`;

    let pokemonData = {
        name: 'Bulbasaur',
        sprites: {
            front_default: 'abc.png'
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
        ]
    };

    if(!loading) pokemonData = data.pokemon;
    console.log(location.state.pokemonName);
    return (
        <div>
            <div>
                <TopBar/>
            </div>
            <div css={homepage}>
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WingBlank size='sm' css={pokemonCards}>
                    <WhiteSpace size="lg" />
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
                                            <img src={pokemonData.sprites.front_default} className='pokemonImage'/>
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
                                            {/*<div className='pokemonDetailMovesContainer'>*/}
                                            {/*    {*/}
                                            {/*        pokemonData.moves.map(index => (*/}
                                            {/*            <Button className='buttonMoves'>{index.move.name.toUpperCase()}</Button>*/}
                                            {/*        ))*/}
                                            {/*    }*/}
                                            {/*</div>*/}
                                            <Accordion defaultActiveKey="0" >
                                                <Accordion.Panel header='MOVES' className='movesAccordion'>
                                                        {
                                                            pokemonData.moves.map(index => (
                                                                <Button className='buttonMoves'>{index.move.name.toUpperCase()}</Button>
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
