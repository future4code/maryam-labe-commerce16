import React from 'react';
import styled from 'styled-components'

const DivFiltro = styled.div`
border: 1pt solid black;
min-height: 100vh;
width: 20vw;
margin: 16px;
padding: 8px;
display: flex;
flex-direction: column;
align-items: flex-start;
background-color: #d9e4f1; 
box-shadow: 2px 2px 5px darkgray;
button:hover {
    background-color: lightgray;
}
`
const DivTotal = styled.div`
display: flex;
align-items: center;
justify-content: center;


`

export default class Carrinho extends React.Component {

    calculaTotal = (cartFilho) => {
       /* { console.log(cartFilho) }*/

        let preco = 0

        for (let i = 0; i < cartFilho.length; i++) {
            preco = preco + (cartFilho[i].preco * cartFilho[i].quantidade)
        }

        return <h5>R${preco}</h5>
    }

    renderizaCarrinho = (cartFilho) => {

        let temp = cartFilho.filter(
            (item) => {
                return item.quantidade > 0
            }
        )
        return temp.map(
            (item) => {
                return <li>{item.quantidade} x {item.nome}                     <button onClick={() => this.props.remove(item.id)}>x</button>
                </li>;
            });
    };

    render() {

        let cartFilho = this.props.cart

        return (
            <DivFiltro>
                <h3>Carrinho</h3>

                {cartFilho.length > 0 ? (
                    <ul>
                        {this.renderizaCarrinho(cartFilho)}
                    </ul>
                ) : (
                    <p>Carrinho vazio</p>
                )}

                <DivTotal>
                    <h4>Total: </h4> {this.calculaTotal(cartFilho)}
                </DivTotal>


            </DivFiltro>
        );
    }
}