/** @jsxImportSource @emotion/react */

import React, {useState} from 'react';
import {Card, WingBlank, WhiteSpace, Button, Accordion} from "antd-mobile";
import {TopBar} from "../Components/TopBar";
import {PokemonCardsCSS, PokemonDetailPageCSS} from '../Styling/PagesCSS'
import {gql, useQuery} from "@apollo/client";
import {checkBackgroundColor, FIRST_TEXT} from '../Utils/Utils';
import {Loading} from "../Components/Loading";
import {CatchModal} from "../Components/CatchModal";
import {DetailedPokemonData} from "../Fixtures/PokemonData";

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
    const [loadingText, setLoadingText] = useState(FIRST_TEXT);
    const [isLoading, setIsLoading] = useState(true);
    const [chance, setChance] = useState(0);


    const pokemonName = (window.location.href).substring((window.location.href).lastIndexOf('/')+1);

    const { loading, error, data } = useQuery(GET_POKEMONS_DETAIL, {
        variables: {name: pokemonName}
    });

    let pokemonData = DetailedPokemonData

    if (!loading) {
        pokemonData = data.pokemon
        if(pokemonData.name === null){
            pokemonData = DetailedPokemonData;
            console.log(pokemonData);
            console.log('masuk');
        }
    }

    if (error) return `Error! ${error.message}`;
    const handleLoading = () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 4000);
        setTimeout(() => {
            setLoadingText('THE BALL IS SHAKING....');
        }, 1000);
        setTimeout(() => {
            setLoadingText('IS IT GOING TO BE IT?....');
        }, 2000);
        setTimeout(() => {
            setLoadingText('THE BALL IS SETTLING....');
        }, 3000);
    }

    const handlePokemonClick = () => {
        setChance(Math.floor((Math.random() * 100) + 1));
        handleLoading();
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
                            <div  style={{minHeight: '50vh'}}>
                                <Loading/>
                            </div>
                            :
                            <div>
                                {pokemonData.gender  ?
                                    <div>
                                        <Card>
                                            <div className='empty-container'>
                                                <h3>POKEMON NOT FOUND!</h3>
                                            </div>
                                        </Card>
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
                                                                    <Button css={checkBackgroundColor(index.type.name)} disabled>
                                                                        <p>{index.type.name.toUpperCase()}</p>
                                                                    </Button>
                                                                ))
                                                            }
                                                        </div>
                                                        <WhiteSpace size='md'/>
                                                        <WhiteSpace size='md'/>
                                                        <Accordion>
                                                            <Accordion.Panel header='ABILITIES' className='accordion-content'>
                                                                {
                                                                    pokemonData.abilities.map(index => (
                                                                        <Button disabled size='small' className='move-container'>
                                                                            <p>{index.ability.name.toUpperCase()}</p>
                                                                        </Button>
                                                                    ))
                                                                }
                                                            </Accordion.Panel>
                                                            <WhiteSpace size='xl'/>
                                                            <Accordion.Panel header='MOVES' className='accordion-content'>
                                                                {
                                                                    pokemonData.moves.map(index => (
                                                                        <Button disabled className='move-container' size='small'>
                                                                            <p>{index.move.name.toUpperCase()}</p>
                                                                        </Button>
                                                                    ))
                                                                }
                                                            </Accordion.Panel>
                                                        </Accordion>
                                                        <WhiteSpace size='md'/>
                                                        <CatchModal
                                                            visible={isCatchModalVisible}
                                                            setVisible={setIsCatchModalVisible}
                                                            loadingText={loadingText}
                                                            setLoadingText={setLoadingText}
                                                            pokemon={pokemonData}
                                                            catchChance={chance}
                                                            setChance={setChance}
                                                            isLoading={isLoading}
                                                            setIsLoading={setIsLoading}
                                                            handleLoading={handleLoading}
                                                        />
                                                        <WhiteSpace size='sm'/>
                                                        <div className='catch-pokemon-button-container'>
                                                            <Button className='catch-pokemon-button' size='large' onClick={handlePokemonClick}>THROW POKEBALL</Button>
                                                        </div>
                                                        <WhiteSpace size='xl'/>
                                                        <WhiteSpace size='xl'/>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </div>
                                    </Card>
                                }

                            </div>
                    }
                </WingBlank>
            </div>
        </div>
    );
}
