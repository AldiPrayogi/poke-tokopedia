/** @jsxImportSource @emotion/react */

import React from 'react';
import {Button, Modal, WhiteSpace} from 'antd-mobile';
import 'antd/es/spin/style/css';
import {NameForm} from './NameForm';
import {ModalCSS} from "../Styling/PagesCSS";
import {Loading} from "./Loading";

export const CatchModal =  ({visible, setVisible, pokemon, catchChance, setChance, isLoading, setIsLoading}) => {
    const handleOnClose = () => {
        setVisible(false);
        setIsLoading(true);
    }

    const handleChance = (chance) => {
        return chance < 50;
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
                css={ModalCSS}
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
                                    <h2>CONGRATULATIONS!</h2>
                                </div>
                                <div>
                                    <img src={pokemon.sprites.front_default} className='pokemon-image' alt={pokemon.name}/>
                                </div>
                                <WhiteSpace size='md'/>
                                <div>
                                    <h3>GOTCHA!</h3>
                                    <h3>{pokemon.name.toUpperCase()} WAS CAUGHT!</h3>
                                </div>
                                <WhiteSpace size='md'/>
                                <NameForm setVisible={setVisible} pokemon={pokemon}/>
                            </div>
                            :
                            <div className='failed-catch-container'>
                                <div className='failed-catch-text'>
                                    <h1>OH NO, THE POKEMON BROKE FREE!</h1>
                                </div>
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