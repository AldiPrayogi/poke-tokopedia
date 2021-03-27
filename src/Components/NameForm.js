/** @jsxImportSource @emotion/react */

import React from 'react';
import { useFormik } from 'formik';
import {WhiteSpace} from "antd-mobile";
import {Input} from "antd";
import {NicknameFormCSS} from "../Styling/ComponentCSS";
const ls = require('local-storage');

export const NameForm = ({setVisible, pokemon}) => {
    const pokedex = ls.get('pokemonList');
    const temp = pokedex ? pokedex : [];

    const formik = useFormik({
        initialValues: {
            nickname: '',
        },
        onSubmit: values => {
            const newPokemon = {
                name: pokemon.name,
                image: pokemon.sprites.front_default,
                level: Math.floor((Math.random() * 100) + 1),
                nickname: values.nickname,
                types: pokemon.types,
                height: pokemon.height,
                weight: pokemon.weight,
                abilities: pokemon.abilities
            }
            temp.push(newPokemon);
            ls.set('pokemonList', temp);
            setVisible(false);
        },
        validate: values => {
            const errors = {};
            const truth = temp.some(item =>  item.nickname === values.nickname);
            console.log(truth);
            if(truth){
                errors.nickname = 'Nickname already taken';
            }
            if(!values.nickname){
                errors.nickname = 'Nickname is needed';
            }
            if(values.nickname.length > 15){
                errors.nickname = 'Nickname is more than 15 characters';
            }
            return errors;
        }
    });
    return (
        <div css={NicknameFormCSS}>
            <WhiteSpace size='xl'/>
            <h4>Enter its nickname!</h4>
            <WhiteSpace size='md'/>
            <form onSubmit={formik.handleSubmit}>
                <Input
                    className='input-nickname'
                    placeholder='Nickname'
                    id="nickname"
                    name="nickname"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.nickname}
                    width={'500px'}
                />
                {
                    formik.touched.nickname && formik.errors.nickname
                        ?
                        <div className='error-message'>
                            {formik.errors.nickname}
                        </div>
                        :
                        null
                }
            </form>
            <WhiteSpace size='xl'/>
        </div>
    );
};
