/** @jsxImportSource @emotion/react */

import {containerGithub,containerPokeball,topBarCSS} from './ComponentCSS';
import PokeBall from '../PinClipart.com_pokeball-clip-art_843046.png';
import { useHistory } from 'react-router-dom'

export const TopBar = () => {
    const history = useHistory();

    const handlePokeballClick =  () => {
        history.push('/');
    }

    return(
        <div css={topBarCSS}>
            <div css={containerPokeball}>
                <a onClick={handlePokeballClick}><img src={PokeBall} alt='PokeBall' width='120vw'/></a>
                <h2>Gotta Catch 'Em All!</h2>
            </div>
            <div css={containerGithub}>
                <a target="_blank" href='https://github.com/AldiPrayogi/' rel='noreferrer'>GitHub</a>
            </div>
        </div>
    );
}

