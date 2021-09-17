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
<<<<<<< HEAD

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
=======
    seletorPreco: "crescente",
>>>>>>> 8602a0d1ebd65c123e39900491014be95f9752f1

  }

  onChangeFiltroMaximo = (event) => {
    this.setState({ inputValorMaximo: event.target.value })
    /*console.log(this.state.inputValorMaximo)*/
  }

  onChangeFiltroMinimo = (event) => {
    this.setState({ inputValorMinimo: event.target.value })
    /*console.log(this.state.inputValorMinimo)*/
  }

  onChangeFiltroNome = (event) => {
    this.setState({ inputBuscaPorNome: event.target.value })
    /*console.log(this.state.inputBuscaPorNome)*/
  }

  onClickLimparFiltros = () => {
   /* console.log(this.state.inputBuscaPorNome)*/
    this.setState({
      inputValorMinimo: "",
      inputValorMaximo: "",
      inputBuscaPorNome: "",
    })
  }

  onClickAdicionar = (indexVelho) => {

    let temp = this.state.produtos
<<<<<<< HEAD
    temp[index - 1].quantidade = temp[index - 1].quantidade + 1
=======
    let index = indexVelho 


    for (let j = 0; j <8; j++ ) {
      if (temp[j].id === indexVelho) { index = j}
    }
 
    {console.log(indexVelho, index)}


    temp[index ].quantidade = temp[index ].quantidade + 1
>>>>>>> 8602a0d1ebd65c123e39900491014be95f9752f1

    this.setState({
      produtos: temp
    })
  };

<<<<<<< HEAD
  onClickRemover = (index) => {
    let temp = this.state.produtos
    temp[index - 1].quantidade = temp[index - 1].quantidade - 1

=======
  onClickRemover = (indexVelho) => {

    let temp = this.state.produtos
    let index = indexVelho 

    for (let j = 0; j <8; j++ ) {
      if (temp[j].id === indexVelho) { index = j}
    }

    temp[index ].quantidade = temp[index ].quantidade - 1
>>>>>>> 8602a0d1ebd65c123e39900491014be95f9752f1
    this.setState({
      produtos: temp
    })
  };
<<<<<<< HEAD

  render() {
    return (<div className="App">

      <Filtro
        // produtos={this.state.produtos}
        inputBuscaPorNome={this.state.inputBuscaPorNome} // criado comando para passar por props em Filtro.js
        inputValorMinimo={this.state.inputValorMinimo} // criado comando para passar por props em Filtro.js
        inputValorMaximo={this.state.inputValorMaximo} // criado comando para passar por props em Filtro.js
        onChangeFiltroNome={this.onChangeFiltroNome} // criado comando para passar por props em Filtro.js
        onChangeFiltroMaximo={this.onChangeFiltroMaximo} // criado comando para passar por props em Filtro.js
        onChangeFiltroMinimo={this.onChangeFiltroMinimo} // criado comando para passar por props em Filtro.js

      />
      <Produtos
        produtos={this.state.produtos} // criado comando para passar por props em Produtos.js
        inputBuscaPorNome={this.state.inputBuscaPorNome} // criado comando para passar por props em Produtos.js
        inputValorMinimo={this.state.inputValorMinimo} // criado comando para passar por props em Produtos.js
        inputValorMaximo={this.state.inputValorMaximo} // criado comando para passar por props em Produtos.js
      />
      <div className="carrinho">Carrinho</div>
    </div>)
=======

  onChangeSeletor = (event) => {
    this.setState({ seletorPreco: event.target.value })
  }

  render() {

    let cartTemp = this.state.produtos

    return (

      <div className="App">

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
          seletorPreco={this.state.seletorPreco} // criado comando para passar por props em Produtos.js
          onChangeSeletor={this.onChangeSeletor} // criado comando para passar por props em Produtos.js
          altera={this.onClickAdicionar}
        />

        {console.log( this.state.produtos ) }

        <Carrinho cart={cartTemp} altera={this.onClickAdicionar} remove={this.onClickRemover} />

      </div>)
>>>>>>> 8602a0d1ebd65c123e39900491014be95f9752f1
  }
}