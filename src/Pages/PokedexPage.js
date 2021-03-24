/** @jsxImportSource @emotion/react */

import React, {useState} from 'react';
import {Button, WhiteSpace, WingBlank, Carousel} from "antd-mobile";
import { useHistory } from 'react-router-dom';
import {TopBar} from "../Components/TopBar";
import { homepage, navigationButton,pokemonCards} from '../Styling/PagesCSS'
import {PokemonCarousel} from "../Components/PokemonCarousel";

export const PokedexPage = () => {
    const history = useHistory();

    const handleListClick =  () => {
        history.push('/pokemon-list');
    }

    return (
        <div>
            <div>
                <TopBar/>
            </div>
            <div css={homepage}>
                <div>
                    <h1>asbascacs</h1>
                </div>
            </div>
        </div>
    );
}
