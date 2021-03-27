/** @jsxImportSource @emotion/react */

import React, {useState} from 'react';
import {Button, Card, List, WhiteSpace, WingBlank} from "antd-mobile";
import {TopBar} from "../Components/TopBar";
import {HomePageCSS, PokedexContainer, TitleContainerCSS} from '../Styling/PagesCSS'
import {checkBackgroundColorPokedex} from "../Utils/Utils";
const ls = require('local-storage')

const Item = List.Item;

export const PokedexPage = () => {
    const [pokemonList, setPokemonList] = useState(ls.get('pokemonList'));

    console.log(pokemonList);

    const handleRelease = (pokemon) => {
        const modifiedPokemon = pokemonList.filter(item => {
            if(item.nickname !== pokemon.nickname){
                return item;
            }
            return null;
        })
        ls.set('pokemonList', modifiedPokemon);
        setPokemonList(modifiedPokemon);
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
                <WhiteSpace size="xl" />
                <WhiteSpace size="md" />
                <WhiteSpace size="md" />
                <WingBlank size='xl' css={PokedexContainer}>
                <div>
                    {((pokemonList.length === 0) || !pokemonList) ?
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
                                       {pokemonList.map(item => (
                                           <div className='pokedex-container'>
                                               <div className='am-card-header'>
                                                   <h3 className='am-card-header-content'>
                                                       {item.name.toUpperCase()}
                                                   </h3>
                                               </div>
                                               <Item wrap={true}>
                                                   <div className='pokedex-image'>
                                                       <img src={item.image} alt={item.name}/>
                                                   </div>
                                                   <div className='pokedex-info'>
                                                       <h2>{item.nickname.toUpperCase()}</h2>
                                                       <h5>{item.name.toUpperCase()}</h5>
                                                       <h5>LEVEL: {item.level}</h5>
                                                       <div className='pokedex-types'>
                                                           {
                                                               item.types.map(index => (
                                                                   <Button css={checkBackgroundColorPokedex(index.type.name)} disabled size={"small"}>{index.type.name.toUpperCase()}</Button>
                                                               ))
                                                           }
                                                       </div>
                                                   </div>
                                                   <div className='pokedex-release-button'>
                                                       <Button size={'small'} onClick={() => handleRelease(item)}>RELEASE</Button>
                                                   </div>
                                               </Item>
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
