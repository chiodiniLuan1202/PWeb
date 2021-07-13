import React from "react";
import { BrowserRouter,  Route, Switch } from "react-router-dom";
import CadastroUsuario from './paginas/CadastroUsuario/CadastroUsuario';
import CadastroProdutos from './paginas/CadastroProdutos/CadastroProdutos';
import menu from './paginas/menu';
import login from './paginas/login/Login';
import TelaInicial from './paginas/TelaInicial/telaInicial';
import ListaUsuarios from './paginas/listagemUsuarios/listagemUsuario';
import FAQ from './paginas/FAQ/faq';

function Routes() {
    return (
    <BrowserRouter>
      <Switch>
        <Route  path="/" exact={true} component={login} />
        <Route  path="/CadastroUsuario" component={CadastroUsuario} />
        <Route  path="/CadastroProdutos" component={CadastroProdutos} />
        <Route  path="/menu" component={menu} />
        <Route  path="/TelaInicial" component={TelaInicial} />
        <Route  path="/ListaUsuarios" component={ListaUsuarios} />
        <Route  path="/faq" component={FAQ} />
       
       
      </Switch>
    </BrowserRouter>
    );
  }


  export default Routes;