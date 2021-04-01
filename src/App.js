/** @jsxImportSource @emotion/react */

import React from 'react';
import {HomePage} from "./Pages/HomePage";
import {Route, Switch} from 'react-router-dom';
import {PokemonListPage} from "./Pages/PokemonListPage";
import {PokedexPage} from "./Pages/PokedexPage";
import {PokemonDetailPage} from "./Pages/PokemonDetailPage";
import {Error} from './Components/Error';
import {TopBar} from "./Components/TopBar";

function App() {
    return(
      <div>
          <TopBar />
          <Switch>
              <Route exact path='/' component={HomePage} />

              <Route path='/pokemon-list' component={PokemonListPage}/>

              <Route path='/pokedex' component={PokedexPage}/>

              <Route path='/pokemon-detail/:name' component={PokemonDetailPage} />
              <Route path='/err' component={Error}/>
          </Switch>
      </div>

    );
}

export default App;