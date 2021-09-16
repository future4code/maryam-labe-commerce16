import React from "react"
import styled from "styled-components"


const DivProdutos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width:100%;
    row-gap: 10px;
    column-gap: 10px;
    margin: 16px 0;
`

const Cards = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
`


export default class Produtos extends React.Component {
    render() {

        const listaDeProdutos = this.props.produtos

        // const listaFiltradaPorValores = this.props.listaDeProdutos.filter((item, index, array) => {

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

        // const listaFiltradaPorNome = this.props.listaDeProdutos.filter((item, index, array) => {

        //     if (item.nome.toLowerCase() === this.props.inputBuscaPorNome.toLowerCase()) {
        //         return true
        //     } else {
        //         return false
        //     }

        // })

        const novaListaDeProdutos = listaDeProdutos.map((item, index, array) => {
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
                    {novaListaDeProdutos}
                </DivProdutos>
            </div>
        )
    }
}