/** @jsxImportSource @emotion/react */

import React, {useState} from 'react';
import {Button, Modal, WhiteSpace} from 'antd-mobile';
import 'antd/es/spin/style/css';
import {NameForm} from './NameForm';
import {CatchModalCSS} from "../Styling/PagesCSS";
const ls = require('local-storage');

export const CatchModal =  ({visible, setVisible, pokemon, catchChance, setChance}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isPokeballThrown, setIsPokeballThrown] = useState(false);

    const pokedexData = ls.get('name');
    const onClose = () => {
        setVisible(false);
        setIsLoading(true);
        setIsPokeballThrown(false);
    }

    const handleChance = (chance) => {
        return chance > 50;
    }

    const handleThrow = () => {
        setIsPokeballThrown(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }

    const handleRetry = () => {
        setIsPokeballThrown(false);
        setIsLoading(true);
        setChance(Math.floor((Math.random() * 100) + 1));
        handleThrow();
    }
    return (
        <div>
            <Modal
                title={<h3>{pokemon.name.toUpperCase()}</h3>}
                visible={visible}
                markClosable={true}
                transparent
                afterClose={() => onClose()}
                css={CatchModalCSS}
            >
                <div>
                    <img src={pokemon.sprites.front_default} className='pokemon-image' alt={pokemon.name}/>
                </div>
                <NameForm setVisible={setVisible} pokemon={pokemon}/>
                <WhiteSpace size='xl'/>
                <WhiteSpace size='xl'/>
                {/*<div className='container'>*/}
                {/*    <Button onClick={onClose} className='button-close'>CANCEL</Button>*/}
                {/*</div>*/}
            </Modal>
        </div>
    );
}