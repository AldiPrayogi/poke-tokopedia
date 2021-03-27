/** @jsxImportSource @emotion/react */

import React, {useState} from 'react';
import {Card, WingBlank, WhiteSpace, Button, Accordion} from "antd-mobile";
import {TopBar} from "../Components/TopBar";
import {PokemonCardsCSS, PokemonDetailPageCSS, PokemonListPageCSS} from '../Styling/PagesCSS'
import {gql, useQuery} from "@apollo/client";
import {css} from "@emotion/react";
import {checkBackgroundColor} from '../Utils/Utils';
import {Loading} from "../Components/Loading";
import {CatchModal} from "../Components/CatchModal";

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

export const PokemonDetailPage = () => {
    const [isCatchModalVisible, setIsCatchModalVisible] = useState(false);
    const [isSuccessfulModalVisible, setIsSuccessfulModalVisible] = useState(false);
    const [chance, setChance] = useState(0);
    const pokemonName = (window.location.href).substring((window.location.href).lastIndexOf('/')+1);

    console.log(isCatchModalVisible);

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

    const handlePokemonClick = () => {
        setChance(Math.floor((Math.random() * 100) + 1));
        (chance < 20) ? alert('Please try again') : setIsCatchModalVisible(true);
    }

    console.log(window.location.href);
    return (
        <div>
            <div>
                <TopBar/>
            </div>
            <div css={PokemonDetailPageCSS}>
                <div className='pokemonListTitle'>
                    <WhiteSpace size='xl'/>
                    <h2>POKEMON DETAIL</h2>
                    <WhiteSpace size='xl'/>
                </div>
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <WhiteSpace size="md" />
                <WingBlank size='sm' css={PokemonCardsCSS}>
                    {
                        loading ? <Loading/>:
                            <Card>
                                <div className='cardContainer'>
                                    <WhiteSpace size='xl'/>
                                    <WhiteSpace size='xl'/>
                                    <div className='am-card-header'>
                                        <h3 className='am-card-header-content'>
                                            POKEMON
                                        </h3>
                                    </div>
                                    <Card.Body>
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
                                                    <CatchModal
                                                        visible={isCatchModalVisible}
                                                        setVisible={setIsCatchModalVisible}
                                                        pokemon={pokemonData}
                                                        catchChance={chance}
                                                        setChance={setChance}
                                                    />
                                                    <Button className='catchPokemonButton' id='Details' onClick={handlePokemonClick}>THROW POKEBALL</Button>
                                                    <WhiteSpace size='xl'/>
                                                    <WhiteSpace size='xl'/>
                                                </div>
                                            </div>
                                    </Card.Body>
                                </div>
                            </Card>
                    }
                </WingBlank>
            </div>
        </div>
    );
}
