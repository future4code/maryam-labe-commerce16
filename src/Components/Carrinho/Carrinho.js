import React from 'react';
import Botao from './Botao';

export default class Carrinho extends React.Component {

    state = {
        carrinho : [
            {
                id: 0,
                nome: 'Produto 1',
                preco: 100,
                quantidade: 5
            },
            {
                id: 1,
                nome: 'Produto 2',
                preco: 20,
                quantidade: 3
            },
        ],


    }


    onClickAdicionar = (index) => {

        let temp = this.state.carrinho

        temp[index].quantidade = temp[index].quantidade + 1
        this.setState({
            carrinho: temp
        })

    }


    onClickRemover = (index) => {
        let temp = this.state.carrinho

        temp[index].quantidade = temp[index].quantidade - 1

        this.setState({
            carrinho: temp
        })

        if(temp[index].quantidade == 0) {


        }



    };
    

    renderizaCarrinho = () => {

        let temp = this.state.carrinho.filter(   
            (item) => {
                return item.quantidade > 0
            }                            
        )

        return temp.map(
            (item) => {
            return <li>{item.quantidade} x {item.nome}                     <button onClick={() => this.onClickRemover(item.id)}>x</button>
            </li>;
        });
        
    };
        


    render(){

        return (
            <div className="ShoppingCart">

                <h2>Carrinho:</h2>

                {this.state.carrinho.length > 0 ? (
                    <ul>
                        {this.renderizaCarrinho()}
                    </ul>
                ) : (
                <p>Carrinho vazio</p>
                )}



                <div>
                    <button onClick={() => this.onClickAdicionar(0)}>Adicionar Produto 1</button>
                    <button onClick={() => this.onClickAdicionar(1)}>Adicionar Produto 2</button>

                </div>


            </div>
        );
    }
}
