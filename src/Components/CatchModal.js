/** @jsxImportSource @emotion/react */

import React from 'react';
import {Button, Modal, WhiteSpace} from 'antd-mobile';
import 'antd/es/spin/style/css';
import {NameForm} from './NameForm';
import {CatchModalCSS} from "../Styling/PagesCSS";
import {Loading} from "./Loading";

export const CatchModal =  ({visible, setVisible, pokemon, catchChance, setChance, isLoading, setIsLoading}) => {
    const handleOnClose = () => {
        setVisible(false);
        setIsLoading(true);
    }

    const handleChance = (chance) => {
        return chance < 100;
    }

    const handleThrow = () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }

    const handleRetry = () => {
        setIsLoading(true);
        setChance(Math.floor((Math.random() * 100) + 1));
        handleThrow();
    }
    return (
        <div>
            <Modal
                visible={visible}
                markClosable={true}
                transparent
                afterClose={() => handleOnClose()}
                css={CatchModalCSS}
            >
                {isLoading ?
                    <div>
                        <Loading/>
                    </div>
                    :
                    <div>
                        {handleChance(catchChance) ?
                            <div className='successful-catch-container'>
                                <div>
                                    <h3>{pokemon.name}</h3>
                                </div>
                                <div>
                                    <img src={pokemon.sprites.front_default} className='pokemon-image' alt={pokemon.name}/>
                                </div>
                                <NameForm setVisible={setVisible} pokemon={pokemon}/>
                                <WhiteSpace size='xl'/>
                                <WhiteSpace size='xl'/>
                            </div>
                            :
                            <div className='failed-catch-container'>
                                <h1>OH NO, THE POKEMON BROKE FREE!</h1>
                                <WhiteSpace size='md'/>
                                <div className='button-container'>
                                    <Button onClick={handleRetry}>Retry</Button>
                                    <Button onClick={handleOnClose}>Close</Button>
                                </div>
                            </div>
                        }
                    </div>
                }
            </Modal>
        </div>
    );
}