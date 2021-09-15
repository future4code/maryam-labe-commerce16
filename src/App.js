import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {

  state = {
    numeroProdutos: 200

  }

  render(){
    return (



      <div className="App">
        <div className="filtro">Filtro</div>
        <div className="meio">Meio</div> 
        <div classname="carrinho">Carrinho</div> 




      </div>
    );
  }
}

