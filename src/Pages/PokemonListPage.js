/** @jsxImportSource @emotion/react */

import React, {useState} from 'react';
import {PaginationContainer, PokemonListPageCSS} from "../Styling/PagesCSS";
import {Card, Grid, WhiteSpace, Pagination} from "antd-mobile";
import {gql, useQuery} from "@apollo/client";
import {Loading} from "../Components/Loading";
import {useHistory} from 'react-router-dom';
import {PokemonData} from '../Fixtures/PokemonData'
const ls = require('local-storage');

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      results {
        id
        url
        name
        image
      }
    }
  }
`;

const limit = 12;

const locale = {
    prevText: 'Prev',
    nextText: 'Next',
};

export const PokemonListPage =  () => {
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const ownedPokemon = ls.get('pokemonList') ? ls.get('pokemonList') : [{}];

    const history = useHistory();

    const handlePokemonClick =  (name) => {
        history.push({
            pathname: `/pokemon-detail/${name}`
        });
    }

    const handlePaginationChange = (changePage) => {
        setOffset(limit*(changePage-1));
        setCurrentPage(changePage);
    }

    const { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: {limit, offset},
    });

    if (error) return `Error! ${error.message}`;

    let pokemonData = PokemonData;

    if(!loading) {
        pokemonData = data.pokemons.results;

        const modifiedPokemonData = pokemonData.map(object => ({
            ...object, count: 0
        }))

        const tempResult = {};

        for(let {name} of ownedPokemon){
            tempResult[name] = {
                name,
                count: tempResult[name] ? tempResult[name].count+1 : 1
            };
        }

        const ownedPokemonDataWithCount = (Object.values(tempResult));

        modifiedPokemonData.map(item => {
            ownedPokemonDataWithCount.map(ownedItem => {
                if(item.name === ownedItem.name){
                    item.count = ownedItem.count
                }
                return null;
            })
            return null;
        });

        pokemonData = modifiedPokemonData;
    }

    return (
        <div>
            <div css={PokemonListPageCSS}>
                <div className='pokemon-list-title'>
                    <WhiteSpace size='xl'/>
                    <h2>POKEMON LIST</h2>
                    <WhiteSpace size='xl'/>
                </div>
                <Card css={PaginationContainer}>
                    <Card.Body>
                        <div>
                            {loading ? <Loading /> :
                                <div className='grid-container'>
                                    <Grid
                                        data={pokemonData}
                                        hasLine={false}
                                        square={false}
                                        columnNum={3}
                                        renderItem={dataItem => (
                                            <div className='content-container'>
                                                <h5>{dataItem.name.toUpperCase()}</h5>
                                                <img
                                                    src={dataItem.image}
                                                    alt="Pokemon"
                                                    style={{ height: '40%', verticalAlign: 'top'}}
                                                    onClick={() => handlePokemonClick(dataItem.name)}
                                                />
                                                <h5 className='owned-amount'>OWNED AMOUNT: {dataItem.count}</h5>
                                            </div>
                                        )}
                                    />
                                </div>
                            }
                            <WhiteSpace size='xl'/>
                            <WhiteSpace size='xl'/>
                            <div className="pagination-container" >
                                <Pagination total={94} current={currentPage} locale={locale} onChange={handlePaginationChange}/>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}