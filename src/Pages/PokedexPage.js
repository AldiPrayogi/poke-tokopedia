/** @jsxImportSource @emotion/react */

import React, {useState} from 'react';
import {Button, Card, List, Modal, WhiteSpace, WingBlank} from "antd-mobile";
import {TopBar} from "../Components/TopBar";
import {
    HomePageCSS,
    PokedexContainer,
    TitleContainerCSS,
    ReleaseConfirmationModalCSS
} from '../Styling/PagesCSS'
import {checkBackgroundColorPokedex} from "../Utils/Utils";
const ls = require('local-storage')

const Item = List.Item;

export const PokedexPage = () => {
    const [pokemonList, setPokemonList] = useState(ls.get('pokemonList'));
    const [deletedPokemon, setDeletedPokemon] = useState({});
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

    const handleRelease = (pokemon) => {
        setDeletedPokemon(pokemon);
        setIsConfirmationModalOpen(true);
    }
    const handleCancelRelease = () => {
        setIsConfirmationModalOpen(false);
    }

    const handleConfirmedRelease = () => {
        console.log(deletedPokemon);
        const modifiedPokemon = pokemonList.filter(item => {
            if(item.nickname !== deletedPokemon.nickname){
                return item;
            }
            return null;
        })
        console.log(modifiedPokemon);
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
                                                                        <Button css={checkBackgroundColorPokedex(index.type.name)} disabled size={"small"}>
                                                                            <p>
                                                                                {index.type.name.toUpperCase()}
                                                                            </p>
                                                                        </Button>
                                                                    ))
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className='pokedex-info-container'>
                                                            <div className='pokedex-info'>
                                                                <div className='pokedex-info-left'>
                                                                    <h4>POKEMON</h4>
                                                                    <h4>LEVEL</h4>
                                                                    <h4>WEIGHT</h4>
                                                                    <h4>HEIGHT</h4>
                                                                </div>
                                                                <div className='pokedex-info-right'>
                                                                    <h4>: {item.name.toUpperCase()}</h4>
                                                                    <h4>: {item.level}</h4>
                                                                    <h4>: {item.weight}KG</h4>
                                                                    <h4>: {item.height}M</h4>
                                                                </div>
                                                                <div className='abilities-container-title'>
                                                                    <h4>ABILITIES:</h4>
                                                                </div>
                                                            </div>
                                                            <div className='abilities-container'>
                                                                {
                                                                    item.abilities.map(index => (
                                                                        <Button disabled className='abilities-button' size='small'>
                                                                            <p>{index.ability.name.toUpperCase()}</p>
                                                                        </Button>
                                                                    ))
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className='pokedex-release-button'>
                                                            <Button size='small' type='warning' onClick={() => handleRelease(item)}>
                                                                <p>RELEASE</p>
                                                            </Button>
                                                        </div>
                                                    </Item>
                                                    <Modal
                                                        visible={isConfirmationModalOpen}
                                                        css={ReleaseConfirmationModalCSS}
                                                        transparent
                                                    >
                                                        <div className='confirmation-modal-container'>
                                                            <div className='confirmation-modal-text'>
                                                                <h2>ARE YOU SURE? THIS WILL RELEASE YOUR POKEMON INTO THE WILD!</h2>
                                                            </div>
                                                            <WhiteSpace size='md'/>
                                                            <div className='button-container'>
                                                                <Button onClick={() => handleConfirmedRelease()}>YES</Button>
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
