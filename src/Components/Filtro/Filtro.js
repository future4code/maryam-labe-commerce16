import React from 'react'
import styled from 'styled-components'

const DivFiltroCadaInput = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 8px;
align-items: flex-start;
input {
    max-width: 15vw;
    cursor: text;
}
`
const DivFiltro = styled.div`
border: 1pt solid black;
min-height: 100vh;
width: 20vw;
margin: 16px;
padding: 8px;
display: flex;
flex-direction: column;
align-items: flex-start;

`


export default class Filtro extends React.Component {
    render() {
        return (
            <DivFiltro>
                <h3>Filtros</h3>

                <DivFiltroCadaInput>
                    <label>Valor Mínimo:</label>
                    <input
                        value={this.props.inputValorMinimo}
                        placeholder={"Valor Mínimo"}
                        onChange={this.props.onChangeFiltroMinimo}
                        type="number"

                    // onChangeFiltroMinimo = (event) => { // para colocar no App.js
                    //     this.setState ({inputValorMinimo: event.target.value})
                    // console.log(this.state.inputValorMinimo)
                    // }

                    />
                </ DivFiltroCadaInput>

                <DivFiltroCadaInput>
                    <label>Valor Máximo:</label>
                    <input
                        value={this.props.inputValorMaximo}
                        placeholder={"Valor Máximo"}
                        onChange={this.props.onChangeFiltroMaximo}
                        type="number"

                    //     onChangeFiltroMaximo= (event) => { // para colocar no App.js
                    //     this.setState({ inputValorMaximo: event.target.value })
                    // console.log(this.state.inputValorMaximo)
                    // }

                    />
                </DivFiltroCadaInput>

                <DivFiltroCadaInput>
                    <label>Busca por nome:</label>
                    <input
                        value={this.props.inputBuscaPorNome}
                        placeholder={"Digite uma palavra"}
                        onChange={this.props.onChangeFiltroNome}
                        type="text"

                    // onChangeFiltroNome= (event) => { // para colocar no App.js
                    // this.setState({ inputBuscaPorNome: event.target.value })
                    // console.log(this.state.inputBuscaPorNome)
                    // }

                    />
                </DivFiltroCadaInput>

            </DivFiltro>

        )
    }
}

// state = { // para colocar no App.js
//     inputValorMinimo: "",
//     inputValorMaximo: "",
//     inputBuscaPorNome: "",
// }


// DESDE AQUI VAI NO PRODUTOS.JS
// const listaFiltradaPorValores = listaDeProdutos.filter((item, index, array) => { 

//     if (item.preco >= this.props.inputValorMinimo) {
//         return true
//     } else {
//         return false
//     }


// }).filter((item, index, array) => {

//     if (item.preco <= this.props.inputValorMaximo) {
//         return true
//     } else {
//         return false
//     }

// })

// const listaFiltradaPorNome = listaDeProdutos.filter((item, index, array) => {

//     if (item.nome.toLowerCase() === this.props.inputBuscaPorNome.toLowerCase()) {
//         return true
//     } else {
//         return false
//     }

// }) // ATÉ AQUI VAI NO PRODUTOS.JS

