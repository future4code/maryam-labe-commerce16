
import React from 'react';
import styled from 'styled-components';
import './App.css';
import Produtos from './Components/Produtos/Produtos';
import Carrinho from './Components/Carrinho/Carrinho';
import Filtro from './Components/Filtro/Filtro';




export default class App extends React.Component {

  state = {
    produtos: [
      { id: 1, nome: "Produto 1", preco: 100.00, imagemProduto: "https://picsum.photos/200/200?ramdon=1" },
      { id: 2, nome: "Produto 2", preco: 200.00, imagemProduto: "https://picsum.photos/200/200?ramdon=2" },
      { id: 3, nome: "Produto 3", preco: 3000.00, imagemProduto: "https://picsum.photos/200/200?ramdon=3" },
      { id: 4, nome: "Produto 4", preco: 400.00, imagemProduto: "https://picsum.photos/200/200?ramdon=4" },
      { id: 5, nome: "Produto 5", preco: 500.00, imagemProduto: "https://picsum.photos/200/200?ramdon=5" },
      { id: 6, nome: "Produto 6", preco: 650.00, imagemProduto: "https://picsum.photos/200/200?ramdon=6" },
      { id: 7, nome: "Produto 7", preco: 700.00, imagemProduto: "https://picsum.photos/200/200?ramdon=7" },
      { id: 8, nome: "Produto 8", preco: 1000.00, imagemProduto: "https://picsum.photos/200/200?ramdon=8" }
    ],
    inputValorMinimo: "",
    inputValorMaximo: "",
    inputBuscaPorNome: "",
  }

  onChangeFiltroMaximo = (event) => {
    this.setState({ inputValorMaximo: event.target.value })
    console.log(this.state.inputValorMaximo)
  }

  onChangeFiltroMinimo = (event) => {
    this.setState({ inputValorMinimo: event.target.value })
    console.log(this.state.inputValorMinimo)
  }

  onChangeFiltroNome = (event) => {
    this.setState({ inputBuscaPorNome: event.target.value })
    console.log(this.state.inputBuscaPorNome)
  }

  render() {
    return (

      <div className="App">
        <Filtro />
        <Produtos produtos={this.state.produtos}/>
        <Carrinho />



      </div>
    );
  }
}

