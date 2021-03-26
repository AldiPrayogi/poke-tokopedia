import React from 'react';
import {HomePage} from "./Pages/HomePage";
import {Route, Switch, useHistory} from 'react-router-dom';
import {PokemonListPage} from "./Pages/PokemonListPage";
import {PokedexPage} from "./Pages/PokedexPage";
import {PokemonDetailPage} from "./Pages/PokemonDetailPage";

function App() {
    return(
      <Switch>
          <Route exact path='/' component={HomePage} />

          <Route path='/pokemon-list' component={PokemonListPage}/>

          <Route path='/pokedex' component={PokedexPage}/>

          <Route path='/pokemon-detail/:name' component={PokemonDetailPage} />
      </Switch>

    );
}

export default App;