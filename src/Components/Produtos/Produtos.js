import React from "react"
import styled from "styled-components"

const DivProdutos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width:100%;
    row-gap: 10px;
    column-gap: 10px;
    margin-top: 8px;
    
    /* background-color: #fef8f2; */
     /* background-color: #d5dadf; */
    /* background-color: #abbacc; */
    
`
const Cards = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
box-shadow: 2px 2px 5px darkgray;
img {
    max-width: 200px;
    max-height: 200px;
}
button:hover {
    background-color: lightgray;
}
`
const BoxSuperior = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-left: 30px;
margin-right: 30px;
height: 1.5em;
`

const Prod = styled.div`
display:flex;
flex-direction: column;
min-height: 100vh;
margin-top: 16px;
`

export default class Produtos extends React.Component {
    render() {

        let listaDeProdutos = this.props.produtos
        let inputBuscaPorNome = this.props.inputBuscaPorNome
        let inputValorMinimo = this.props.inputValorMinimo
        let inputValorMaximo = this.props.inputValorMaximo
        let quantidadeListaDeProdutos = this.listaDeProdutos

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
                    return true
                } else {
                    return false
                }
            })
        }

        if (this.props.seletorPreco === "crescente") {

            listaDeProdutos = listaDeProdutos.sort((a, b) => {
                return a.preco - b.preco
            })
        } else if (this.props.seletorPreco === "decrescente") {
            listaDeProdutos = listaDeProdutos.sort((a, b) => {
                return b.preco - a.preco
            })
        }

        listaDeProdutos = listaDeProdutos.map((item, index, array) => {
            return (
                <Cards key={item.id}>
                    <img src={item.imagemProduto} alt={item.nome} />
                    <p>{item.nome}</p>
                    <p>R$ {item.preco}</p>
                    <button produto={item.id} onClick={() => this.props.altera(item.id)}>Adicionar ao Carrinho</button>
                </Cards>
            )
        })

        quantidadeListaDeProdutos = listaDeProdutos.length

        return (
            <Prod>
                <BoxSuperior>
                    <p>Quantidade de produtos: {quantidadeListaDeProdutos}</p>

                    <select
                        value={this.props.seletorPreco}
                        onChange={this.props.onChangeSeletor}
                    >
                        <option value="crescente">Preço Crescente</option>
                        <option value="decrescente">Preço Decrescente</option>

                    </select>
                </BoxSuperior>

                <DivProdutos>
                    {listaDeProdutos}
                </DivProdutos>
            </Prod>
        )
    }
}