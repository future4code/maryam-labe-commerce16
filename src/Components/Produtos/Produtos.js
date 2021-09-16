import React from "react"
import styled from "styled-components"


const DivProdutos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width:100%;
    row-gap: 10px;
    column-gap: 10px;
    margin-top: 16px;

`

const Cards = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
img {
    max-width: 200px;
    max-height: 200px;
}
`


export default class Produtos extends React.Component {
    render() {

        let listaDeProdutos = this.props.produtos
        let inputBuscaPorNome = this.props.inputBuscaPorNome
        let inputValorMinimo = this.props.inputValorMinimo
        let inputValorMaximo = this.props.inputValorMaximo

        if (inputValorMinimo !== "") {
            listaDeProdutos = listaDeProdutos.filter((item, index, array) => {

                if (item.preco >= this.props.inputValorMinimo) {
                    return true
                } else {
                    return false
                }


            })
        }

        if (inputValorMaximo !== "") {
            listaDeProdutos = listaDeProdutos.filter((item, index, array) => {

                if (item.preco <= this.props.inputValorMaximo) {
                    return true
                } else {
                    return false
                }

            })
        }

        if (inputBuscaPorNome !== "") {
            listaDeProdutos = listaDeProdutos.filter((item, index, array) => {

                if (item.nome.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputBuscaPorNome.toLowerCase().trim()) === true) {
                    // if (item.nome.toLowerCase() === inputBuscaPorNome.toLowerCase()) {
                    return true
                } else {
                    return false
                }

            })
        }

        listaDeProdutos = listaDeProdutos.map((item, index, array) => {
            return (
                <Cards key={item.id}>
                    <img src={item.imagemProduto} />
                    <p>{item.nome}</p>
                    <p>R$ {item.preco}</p>
                    <button>Adicionar ao Carrinho</button>
                </Cards>
            )
        })

        return (
            <div>
                <DivProdutos>
                    {listaDeProdutos}
                </DivProdutos>
            </div>
        )
    }
}