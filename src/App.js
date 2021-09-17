import React from 'react';
import styled from 'styled-components';
import './App.css';
import Produtos from './Components/Produtos/Produtos';
import Carrinho from './Components/Carrinho/Carrinho';
import Filtro from './Components/Filtro/Filtro';





export default class App extends React.Component {

  state = {
    produtos: [
      { id: 1, nome: "Produto 1", preco: 100.00, imagemProduto: "https://picsum.photos/200/200?ramdon=1", quantidade: 5 },
      { id: 2, nome: "Produto 2", preco: 200.00, imagemProduto: "https://picsum.photos/200/200?ramdon=2", quantidade: 3 },
      { id: 3, nome: "Produto 3", preco: 3000.00, imagemProduto: "https://picsum.photos/200/200?ramdon=3", quantidade: 0 },
      { id: 4, nome: "Produto 4", preco: 400.00, imagemProduto: "https://picsum.photos/200/200?ramdon=4", quantidade: 0 },
      { id: 5, nome: "Produto 5", preco: 500.00, imagemProduto: "https://picsum.photos/200/200?ramdon=5", quantidade: 0 },
      { id: 6, nome: "Produto 6", preco: 650.00, imagemProduto: "https://picsum.photos/200/200?ramdon=6", quantidade: 0 },
      { id: 7, nome: "Produto 7", preco: 700.00, imagemProduto: "https://picsum.photos/200/200?ramdon=7", quantidade: 0 },
      { id: 8, nome: "Produto 8", preco: 1000.00, imagemProduto: "https://picsum.photos/200/200?ramdon=8", quantidade: 0 }
    ],
    inputValorMinimo: "",
    inputValorMaximo: "",
    inputBuscaPorNome: "",

    carrinho: [
      {
        id: 1,
        quantidade: 5,
        nome: "Produto 1",
        preco: 100.00
      },
      {
        id: 2,
        quantidade: 3
      },

      {
        id: 3,
        quantidade: 0
      },

      {
        id: 4,
        quantidade: 0
      },

      {
        id: 5,
        quantidade: 0
      },

      {
        id: 6,
        quantidade: 0
      },
      {
        id: 7,
        quantidade: 0
      },

      {
        id: 8,
        quantidade: 0
      },
    ],

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

  onClickLimparFiltros = () => {
    console.log(this.state.inputBuscaPorNome)
    this.setState({
      inputValorMinimo: "",
      inputValorMaximo: "",
      inputBuscaPorNome: "",
    })
  }

  onClickAdicionar = (index) => {
    let temp = this.state.produtos
    temp[index - 1].quantidade = temp[index - 1].quantidade + 1

    this.setState({
      produtos: temp
    })
  };

  onClickRemover = (index) => {
    let temp = this.state.produtos
    temp[index - 1].quantidade = temp[index - 1].quantidade - 1

    this.setState({
      produtos: temp
    })
  };

  render() {
    return (<div className="App">

      <Filtro
        inputBuscaPorNome={this.state.inputBuscaPorNome} // criado comando para passar por props em Filtro.js
        inputValorMinimo={this.state.inputValorMinimo} // criado comando para passar por props em Filtro.js
        inputValorMaximo={this.state.inputValorMaximo} // criado comando para passar por props em Filtro.js
        onChangeFiltroNome={this.onChangeFiltroNome} // criado comando para passar por props em Filtro.js
        onChangeFiltroMaximo={this.onChangeFiltroMaximo} // criado comando para passar por props em Filtro.js
        onChangeFiltroMinimo={this.onChangeFiltroMinimo} // criado comando para passar por props em Filtro.js
        onClickLimparFiltros={this.onClickLimparFiltros} // criado comando para passar por props em Filtro.js

      />
      <Produtos
        produtos={this.state.produtos} // criado comando para passar por props em Produtos.js
        inputBuscaPorNome={this.state.inputBuscaPorNome} // criado comando para passar por props em Produtos.js
        inputValorMinimo={this.state.inputValorMinimo} // criado comando para passar por props em Produtos.js
        inputValorMaximo={this.state.inputValorMaximo} // criado comando para passar por props em Produtos.js
      />

      <Carrinho cart={cartTemp} altera={this.onClickAdicionar} remove={this.onClickRemover} />

      <div className="carrinho">Carrinho</div>
    </div>)
  }
}



