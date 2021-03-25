import React from 'react';
import {HomePage} from "./Pages/HomePage";
import {Route, Switch, useHistory} from 'react-router-dom';
import {PokemonListPage} from "./Pages/PokemonListPage";
import {PokedexPage} from "./Pages/PokedexPage";
import {PokemonDetailPage} from "./Pages/PokemonDetailPage";

function App() {
    const history = useHistory();
    return(
      <Switch>
          <Route history={history} exact path='/' component={HomePage} />

          <Route history={history} path='/pokemon-list' component={PokemonListPage}/>

          <Route history={history} path='/pokedex' component={PokedexPage}/>

          <Route history={history} path='/pokemon-detail/:id' component={PokemonDetailPage} />
      </Switch>

    );
}

export default App;