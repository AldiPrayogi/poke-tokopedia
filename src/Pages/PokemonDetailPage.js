/** @jsxImportSource @emotion/react */

import React, {useState} from 'react';
import {Card, WingBlank, WhiteSpace, Button, Accordion} from "antd-mobile";
import {TopBar} from "../Components/TopBar";
import {PokemonCardsCSS, PokemonDetailPageCSS} from '../Styling/PagesCSS'
import {gql, useQuery} from "@apollo/client";
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
    height
    weight
  }
}
`;

export const PokemonDetailPage = () => {
    const [isCatchModalVisible, setIsCatchModalVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [chance, setChance] = useState(0);
    const pokemonName = (window.location.href).substring((window.location.href).lastIndexOf('/')+1);

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
        abilities: [
            {
                ability: {
                    name: 'abc'
                }
            }
        ],
        pokemon: {
            name: 'pokemon'
        }
    };

    if(!loading) pokemonData = data.pokemon;

    console.log(pokemonData);

    const handlePokemonClick = () => {
        setChance(Math.floor((Math.random() * 100) + 1));
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        setIsCatchModalVisible(true);
    }
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
                <WhiteSpace size="md" />
                <WhiteSpace size="md" />
                <WingBlank size='xl' css={PokemonCardsCSS}>
                    {
                        loading ?
                            <div>
                                <Loading  style={{minHeight: '30vh'}}/>
                            </div>
                            :
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
                                            <WhiteSpace size='sm'/>
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
                                                            <Button css={checkBackgroundColor(index.type.name)} disabled>{index.type.name.toUpperCase()}</Button>
                                                        ))
                                                    }
                                                </div>
                                                <WhiteSpace size='md'/>
                                                <WhiteSpace size='md'/>
                                                <Accordion>
                                                    <Accordion.Panel header='MOVES' className='accordion-content'>
                                                        {
                                                            pokemonData.moves.map(index => (
                                                                <div className='moveContainer'>
                                                                    <p>{index.move.name.toUpperCase()}</p>
                                                                </div>
                                                            ))
                                                        }
                                                    </Accordion.Panel>
                                                    <WhiteSpace size='xl'/>
                                                    <Accordion.Panel header='ABILITIES' className='accordion-content'>
                                                        {
                                                            pokemonData.abilities.map(index => (
                                                                <div className='moveContainer'>
                                                                    <p>{index.ability.name.toUpperCase()}</p>
                                                                </div>
                                                            ))
                                                        }
                                                    </Accordion.Panel>
                                                </Accordion>
                                                <WhiteSpace size='md'/>
                                                <CatchModal
                                                    visible={isCatchModalVisible}
                                                    setVisible={setIsCatchModalVisible}
                                                    pokemon={pokemonData}
                                                    catchChance={chance}
                                                    setChance={setChance}
                                                    isLoading={isLoading}
                                                    setIsLoading={setIsLoading}
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
