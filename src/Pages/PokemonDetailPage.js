/** @jsxImportSource @emotion/react */

import React, {useState} from 'react';
import {Card, WingBlank, WhiteSpace, Button} from "antd-mobile";
import {TopBar} from "../Components/TopBar";
import { homepage, pokemonCards} from '../Styling/PagesCSS'
import {gql} from "@apollo/client";
import {css, jsx} from "@emotion/react";
import {checkType} from '../Utils/Utils';

const GET_POKEMONS_DETAIL = gql`
  query pokemons($id: Int) {
    pokemons(id: $id) {
      results {
        id
        url
        name
        image
      }
    }
  }
`;

const checkBackgroundColor = (type) => {
    const backgroundColor =  checkType(type)

    return css`
        background-color: ${backgroundColor};
        width: 31%;
        text-align: center;
        margin-right: 1vw;
        display: inline-block;
        font-size: 3vw;
    `
}

export const PokemonDetailPage = (id) => {

    const data = {
        name: 'Bulbasour',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        nickName: 'Bulb',
        type: [
          'grass', 'poison', 'fighting', 'flying', 'ice'
        ],
        gender: 'Male'
    };
    const color = [];
    data.type.map(t => {
        color.push(checkType(t));
    })
    console.log(color);
    const newData = {
        ...data,
        backgroundColor: color
    };
    console.log(newData);

    return (
        <div>
            <div>
                <TopBar/>
            </div>
            <div css={homepage}>
                <WingBlank size="lg" css={pokemonCards}>
                    <WhiteSpace size="lg" />
                    <Card>
                        <div className='cardContainer'>
                            <WhiteSpace size='md'/>
                            <Card.Header
                                title='POKEMON'
                            />
                            <Card.Body>
                                <h3>{(data.name).toUpperCase()}</h3>
                                <div className='pokemonImageContainer'>
                                    <img src={data.image} className='pokemonImage'/>
                                </div>
                            </Card.Body>
                            <Card.Body>
                                <div className='pokemonDetailContainer'>
                                    <h4>asdawd</h4>
                                    <div className='pokemonDetailTypeContainer'>
                                        {
                                            newData.type.map(i => (
                                                <Button css={checkBackgroundColor(i)}>{i.toUpperCase()}</Button>
                                            ))
                                        }
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                        </div>
                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
            </div>
        </div>
    );
}
