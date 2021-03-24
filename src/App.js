import React from 'react';
import {css} from "@emotion/react";
import { gql, useQuery } from '@apollo/client' ;
import { Loading } from "./Components/Loading";
import { Error } from "./Components/Error";
import {HomePage} from "./Pages/HomePage";
import {Route, Switch} from 'react-router-dom';
import {PokemonListPage} from "./Pages/PokemonListPage";
import {PokedexPage} from "./Pages/PokedexPage";
import {PokemonDetailPage} from "./Pages/PokemonDetailPage";


const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;

function App() {
    return(
      <Switch>
          <Route exact path='/' component={HomePage} />

          <Route path='/pokemon-list' component={PokemonListPage}/>

          <Route path='/pokedex' component={PokedexPage}/>

          <Route path='/pokemon-detail/:id' component={PokemonDetailPage} />
      </Switch>

    );
};

export default App;