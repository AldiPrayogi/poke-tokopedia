/** @jsxImportSource @emotion/react */

import React, {useState} from 'react';
import {Button, Card, List, Modal, WhiteSpace, WingBlank} from "antd-mobile";
import {TopBar} from "../Components/TopBar";
import {ModalCSS, HomePageCSS, PokedexContainer, TitleContainerCSS} from '../Styling/PagesCSS'
import {checkBackgroundColorPokedex} from "../Utils/Utils";
const ls = require('local-storage')

const Item = List.Item;

export const PokedexPage = () => {
    const [pokemonList, setPokemonList] = useState(ls.get('pokemonList'));
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

    const handleRelease = () => {
        setIsConfirmationModalOpen(true);
    }
    const handleCancelRelease = () => {
        setIsConfirmationModalOpen(false);
    }

    const handleConfirmedRelease = (pokemon) => {
        const modifiedPokemon = pokemonList.filter(item => {
            if(item.nickname !== pokemon.nickname){
                return item;
            }
            return null;
        })
        ls.set('pokemonList', modifiedPokemon);
        setPokemonList(modifiedPokemon);
        if(modifiedPokemon.length === 0){
            ls.remove('pokemonList');
            setPokemonList(ls.get('pokemonList'));
        }
        setIsConfirmationModalOpen(false);
    }

    return (
        <div>
            <div>
                <TopBar/>
            </div>
            <div css={HomePageCSS}>
                <div css={TitleContainerCSS}>
                    <WhiteSpace size='xl'/>
                    <h2>YOUR POKEDEX</h2>
                    <WhiteSpace size='xl'/>
                </div>
                <WhiteSpace size="md" />
                <WhiteSpace size="md" />
                <WingBlank size='xl' css={PokedexContainer}>
                    <div>
                        {!(pokemonList) ?
                            <div>
                                <Card>
                                    <div className='empty-container'>
                                        <h3>YOUR POKEDEX IS EMPTY!</h3>
                                    </div>
                                </Card>
                            </div> :
                            <div>
                                <Card>
                                    <Card.Body>
                                        <List>
                                            <WhiteSpace size="md" />
                                            {pokemonList.map(item => (
                                                <div className='pokedex-container'>
                                                    <div className='am-card-header'>
                                                        <h1 className='am-card-header-content'>
                                                            {item.nickname.toUpperCase()}
                                                        </h1>
                                                    </div>
                                                    <Item wrap={true}>
                                                        <div className='pokedex-image'>
                                                            <img src={item.image} alt={item.name}/>
                                                            <div className='pokedex-types'>
                                                                {
                                                                    item.types.map(index => (
                                                                        <Button css={checkBackgroundColorPokedex(index.type.name)} disabled size={"small"}>{index.type.name.toUpperCase()}</Button>
                                                                    ))
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className='pokedex-info'>
                                                            <h5>NAME: {item.name.toUpperCase()}</h5>
                                                            <h5>LEVEL: {item.level}</h5>
                                                            <h5>WEIGHT: {item.weight}KG</h5>
                                                            <h5>HEIGHT: {item.height}M</h5>
                                                            <div>
                                                                <h5>ABILITIES:</h5>
                                                                {
                                                                    item.abilities.map(index => (
                                                                        <Button disabled className='abilities-button' size='small'>{index.ability.name.toUpperCase()}</Button>
                                                                    ))
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className='pokedex-release-button'>
                                                            <Button size={'small'} onClick={() => handleRelease()}>RELEASE</Button>
                                                        </div>
                                                    </Item>
                                                    <Modal
                                                        visible={isConfirmationModalOpen}
                                                        css={ModalCSS}
                                                        transparent
                                                    >
                                                        <div className='confirmation-modal-container'>
                                                            <div className='failed-catch-text'>
                                                                <h2>ARE YOU SURE? THIS WILL RELEASE YOUR POKEMON INTO THE WILD!</h2>
                                                            </div>
                                                            <WhiteSpace size='md'/>
                                                            <div className='button-container'>
                                                                <Button onClick={() => handleConfirmedRelease(item)}>YES</Button>
                                                                <Button onClick={() => handleCancelRelease()}>NO</Button>
                                                            </div>
                                                        </div>
                                                    </Modal>
                                                </div>
                                            ))}
                                        </List>
                                    </Card.Body>
                                </Card>
                            </div>
                        }
                    </div>
                </WingBlank>
            </div>
        </div>
    );
}
