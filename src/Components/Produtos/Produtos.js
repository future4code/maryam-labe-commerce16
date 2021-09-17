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
<<<<<<< HEAD

=======
    
>>>>>>> 8602a0d1ebd65c123e39900491014be95f9752f1
`
const Cards = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
<<<<<<< HEAD
=======
box-shadow: 2px 2px 5px darkgray;
>>>>>>> 8602a0d1ebd65c123e39900491014be95f9752f1
img {
    max-width: 200px;
    max-height: 200px;
}
<<<<<<< HEAD
=======
button:hover {
    background-color: lightgray;
}
`
const BoxSuperior = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 5px 15px;
>>>>>>> 8602a0d1ebd65c123e39900491014be95f9752f1
`

export default class Produtos extends React.Component {
    render() {

        let listaDeProdutos = this.props.produtos
        let inputBuscaPorNome = this.props.inputBuscaPorNome
        let inputValorMinimo = this.props.inputValorMinimo
        let inputValorMaximo = this.props.inputValorMaximo
<<<<<<< HEAD
=======
        let quantidadeListaDeProdutos = this.listaDeProdutos
>>>>>>> 8602a0d1ebd65c123e39900491014be95f9752f1

        if (inputValorMinimo !== "") {
            listaDeProdutos = listaDeProdutos.filter((item, index, array) => {

                if (item.preco >= this.props.inputValorMinimo) {
                    return true
                } else {
                    return false
                }
<<<<<<< HEAD


=======
>>>>>>> 8602a0d1ebd65c123e39900491014be95f9752f1
            })
        }

        if (inputValorMaximo !== "") {
            listaDeProdutos = listaDeProdutos.filter((item, index, array) => {

                if (item.preco <= this.props.inputValorMaximo) {
                    return true
                } else {
                    return false
                }
<<<<<<< HEAD

=======
>>>>>>> 8602a0d1ebd65c123e39900491014be95f9752f1
            })
        }

        if (inputBuscaPorNome !== "") {
            listaDeProdutos = listaDeProdutos.filter((item, index, array) => {

                if (item.nome.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputBuscaPorNome.toLowerCase().trim()) === true) {
<<<<<<< HEAD
                    // if (item.nome.toLowerCase() === inputBuscaPorNome.toLowerCase()) {
=======
>>>>>>> 8602a0d1ebd65c123e39900491014be95f9752f1
                    return true
                } else {
                    return false
                }
<<<<<<< HEAD

=======
            })
        }

        if (this.props.seletorPreco === "crescente") {

            listaDeProdutos = listaDeProdutos.sort((a, b) => {
                return a.preco - b.preco
            })
        } else if (this.props.seletorPreco === "decrescente") {
            listaDeProdutos = listaDeProdutos.sort((a, b) => {
                return b.preco - a.preco
>>>>>>> 8602a0d1ebd65c123e39900491014be95f9752f1
            })
        }

        listaDeProdutos = listaDeProdutos.map((item, index, array) => {
            return (
                <Cards key={item.id}>
<<<<<<< HEAD
                    <img src={item.imagemProduto} />
                    <p>{item.nome}</p>
                    <p>R$ {item.preco}</p>
                    <button>Adicionar ao Carrinho</button>
=======
                    <img src={item.imagemProduto} alt={item.nome} />
                    <p>{item.nome}</p>
                    <p>R$ {item.preco}</p>
                    <button produto={item.id} onClick={() => this.props.altera(item.id)}>Adicionar ao Carrinho</button>
>>>>>>> 8602a0d1ebd65c123e39900491014be95f9752f1
                </Cards>
            )
        })

        quantidadeListaDeProdutos = listaDeProdutos.length

        return (
            <div>
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

                <div></div>
                <DivProdutos>
                    {listaDeProdutos}
                </DivProdutos>
            </div>
        )
    }
}