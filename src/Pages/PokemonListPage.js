/** @jsxImportSource @emotion/react */

import React, {useState} from 'react';
import {TopBar} from "../Components/TopBar";
import {paginationContainer, pokemonListPage} from "../Styling/PagesCSS";
import {Card, Grid, WhiteSpace, Pagination} from "antd-mobile";
import {gql, useQuery} from "@apollo/client";
import {Loading} from "../Components/Loading";
import {useHistory} from 'react-router-dom';

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

const dataTemp = [
    {
        name: 'pokemon',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    },
    {
        name: 'pokemon',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
    },
    {
        name: 'pokemon',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
    }

];

const limit = 12;

export const PokemonListPage =  () => {
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const history = useHistory();

    const handlePokemonClick =  (name) => {
        history.push({
            pathname: `/pokemon-detail/${name}#Details`,
            state: {
                pokemonName: name
            }
        });
    }

    const handlePaginationChange = (changePage) => {
        setOffset(limit*(changePage-1));
        setCurrentPage(changePage);
        console.log(offset);
    }
    const { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: {limit, offset},
    });
    if (error) return `Error! ${error.message}`;

    let pokemonData = dataTemp;

    if(!loading) {
        pokemonData = data.pokemons.results;
        console.log(data.count);
    }
    console.log(pokemonData);


    const locale = {
        prevText: 'Prev',
        nextText: 'Next',
    };

    return (
        <div>
            <div>
                <TopBar/>
            </div>
            <div css={pokemonListPage}>
                <div className='pokemonListTitle'>
                    <WhiteSpace size='xl'/>
                    <h2>POKEMON LIST</h2>
                    <WhiteSpace size='xl'/>
                </div>
                <Card css={paginationContainer}>
                    <Card.Body>
                        <div>
                            {loading ? <Loading /> :
                                <div className='gridContainer'>
                                    <Grid
                                        data={pokemonData}
                                        hasLine={false}
                                        square={false}
                                        renderItem={dataItem => (
                                            <div>
                                                <h5>{dataItem.name.toUpperCase()}</h5>
                                                <img
                                                    src={dataItem.image}
                                                    alt="Pokemon"
                                                    style={{ height: '40%', verticalAlign: 'top'}}
                                                    onClick={() => handlePokemonClick(dataItem.name)}
                                                />
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