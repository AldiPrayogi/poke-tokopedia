import React from 'react';
import { useFormik } from 'formik';
import {Modal, WhiteSpace} from "antd-mobile";
const ls = require('local-storage');

export const NameForm = ({setVisible, pokemon}) => {
    const pokedex = ls.get('pokemonList');
    const temp = pokedex ? pokedex : [];
    console.log(temp);

    const formik = useFormik({
        initialValues: {
            nickname: '',
        },
        onSubmit: values => {
            const newPokemon = {
                name: pokemon.name,
                image: pokemon.sprites.front_default,
                level: Math.floor((Math.random() * 100) + 1),
                nickname: values.nickname
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
            return errors;
        }
    });
    return (
        <div>
            <WhiteSpace size='xl'/>
            <h4>Enter its nickname!</h4>
            <WhiteSpace size='xl'/>
            <form onSubmit={formik.handleSubmit}>
                <input
                    placeholder='Nickname'
                    id="nickname"
                    name="nickname"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                {formik.touched.nickname && formik.errors.nickname ? <div>{formik.errors.nickname}</div> : null}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
