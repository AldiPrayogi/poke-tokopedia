/** @jsxImportSource @emotion/react */

import {containerGithub,containerPokeball,topBarCSS, navigationButton, navigationButtonContainer} from '../Styling/ComponentCSS';
import PokeBall from '../Assets/PinClipart.com_pokeball-clip-art_843046.png';
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
        <div css={topBarCSS}>
            <div css={containerPokeball}>
                <a onClick={handlePokeballClick}><img src={PokeBall} alt='PokeBall' width='120vw'/></a>
                <h2>GOTTA CATCH 'EM ALL!</h2>
            </div>
            <div css={containerGithub}>
                <a target="_blank" href='https://github.com/AldiPrayogi/' rel='noreferrer'>GitHub</a>
            </div>
            <p css={navigationButtonContainer}>
                <div css={navigationButton}>
                    <a onClick={handleListClick}>Pokemon List</a>
                </div>
                <div css={navigationButton}>
                    <a onClick={handleHomeClick} style={{margin: "2vw"}}>Home</a>
                </div>
                <div css={navigationButton}>
                    <a onClick={handlePokedexClick}>Your Pokedex</a>
                </div>
            </p>
        </div>
    );
}

