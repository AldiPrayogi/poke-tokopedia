import React, {useState} from 'react';
import {TopBar} from "../Components/TopBar";
import {homepage, titleContainer, pokemonCardsCarousel} from "../Styling/PagesCSS";
import {Card, Grid, WhiteSpace, Pagination} from "antd-mobile";
import {gql, useQuery} from "@apollo/client";
import {Loading} from "../Components/Loading";

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
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
        name: 'Bulbasour',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    },
    {
        name: 'Ivysaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
    },
    {
        name: 'Venusaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
    }
];

const limit = 12;

export const PokemonListPage =  () => {
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

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

    if(!loading) pokemonData = data.pokemons.results;
    console.log(pokemonData)


    const locale = {
        prevText: 'Prev',
        nextText: 'Next',
    };

    return (
        <div>
            <div>
                <TopBar/>
            </div>
            <div css={homepage}>
                <div css={titleContainer}>
                    <WhiteSpace size='xl'/>
                    <h2>POKEMON LIST</h2>
                    <WhiteSpace size='xl'/>
                </div>
                <div css={pokemonCardsCarousel}>
                    {loading ? <Loading /> :
                        <div style={{width: '80%', margin: 'auto'}}>
                            <Grid
                                data={pokemonData}
                                hasLine={false}
                                square={false}
                                renderItem={dataItem => (
                                    <div>
                                        <p>{dataItem.name.toUpperCase()}</p>
                                        <img
                                            src={dataItem.image}
                                            alt="Pokemon Image"
                                            style={{ height: '40%', verticalAlign: 'top'}}
                                        />
                                    </div>
                                )}
                            />
                        </div>
                    }
                    <div className="pagination-container" >
                        <p className="sub-title">Button with text</p>
                        <Pagination total={93} current={currentPage} locale={locale} onChange={handlePaginationChange}/>
                    </div>
                </div>
            </div>
        </div>
    );
}