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
button {
    cursor:pointer;
    margin-top:8px;
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
                    <label
                    
                    htmlFor="min"
                    >Valor Mínimo:</label>
                    <input
                        value={this.props.inputValorMinimo}
                        placeholder={"Valor Mínimo"}
                        onChange={this.props.onChangeFiltroMinimo}
                        type="number"
                        name="min"

                    />
                </ DivFiltroCadaInput>

                <DivFiltroCadaInput>
                    <label
                    htmlFor="max"
                    >Valor Máximo:</label>
                    <input
                        value={this.props.inputValorMaximo}
                        placeholder={"Valor Máximo"}
                        onChange={this.props.onChangeFiltroMaximo}
                        type="number"
                        name="max"
                    />
                </DivFiltroCadaInput>

                <DivFiltroCadaInput>
                    <label
                    htmlFor="texto"
                    >Busca por nome:</label>
                    <input
                        value={this.props.inputBuscaPorNome}
                        placeholder={"Pesquisa"}
                        onChange={this.props.onChangeFiltroNome}
                        type="text"
                        name="texto"

                    />
                </DivFiltroCadaInput>

                <DivFiltroCadaInput>

                    <button onClick={this.props.onClickLimparFiltros}>Limpar filtros</button>
                </DivFiltroCadaInput>

            </DivFiltro>

        )
    }
}

