/** @jsxImportSource @emotion/react */

import React from 'react';
import {List} from "antd-mobile";
import {TopBar} from "../Components/TopBar";
import { HomePageCSS, navigationButton,pokemonCards} from '../Styling/PagesCSS'
const ls = require('local-storage')

const Item = List.Item;

export const PokedexPage = () => {
    const pokemonList = ls.get('pokemonList');
    console.log(pokemonList);
    return (
        <div>
            <div>
                <TopBar/>
            </div>
            <div css={HomePageCSS}>
                <div>
                    <h1>test</h1>
                    {!pokemonList ?
                        <p>empty</p> :
                        <div>
                            <List>
                                {pokemonList.map(item => (
                                    <Item thumb={item.image}>
                                        <h5 style={{display: 'inline-block'}}>{item.nickname}</h5>
                                        <h5 style={{display: 'inline-block'}}>{item.level}</h5>
                                        <h5 style={{display: 'inline-block'}}>{item.name}</h5>
                                        <h5 style={{display: 'inline-block'}}>{item.nickname}</h5>
                                    </Item>
                                ))}
                            </List>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
