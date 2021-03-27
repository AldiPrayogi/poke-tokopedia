/** @jsxImportSource @emotion/react */

import {ContainerGithubCSS,ContainerPokeballCSS, TopBarCSS, NavigationButtonCSS} from '../Styling/ComponentCSS';
import { useHistory } from 'react-router-dom'
import React from "react";

export const TopBar = () => {
    const history = useHistory();

    const handlePokeballClick =  () => {
        history.push('/');
    }

    const handleListClick =  () => {
        history.push('/pokemon-list');
    }

    const handlePokedexClick = () => {
        history.push('/pokedex');
    }

    const handleHomeClick = () => {
        history.push('/');
    }

    return(
        <div css={TopBarCSS}>
            <div css={ContainerPokeballCSS}>
                <a onClick={handlePokeballClick}><img src='/images/PinClipart.com_pokeball-clip-art_843046.png' alt='PokeBall' width='170px'/></a>
                <h2>GOTTA CATCH 'EM ALL!</h2>
            </div>
            <div css={ContainerGithubCSS}>
                <a target="_blank" href='https://github.com/AldiPrayogi/poke-tokopedia' rel='noreferrer'>GitHub</a>
            </div>
                <div css={NavigationButtonCSS}>
                    <a onClick={handleListClick}>Pokemon List</a>
                </div>
                <div css={NavigationButtonCSS}>
                    <a onClick={handleHomeClick} style={{margin: "2vw"}}>Home</a>
                </div>
                <div css={NavigationButtonCSS}>
                    <a onClick={handlePokedexClick}>Your Pokedex</a>
                </div>
        </div>
    );
}

