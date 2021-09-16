import React from 'react';



export default class Carrinho extends React.Component {



    calculaTotal = (cartFilho) => {
        {console.log(cartFilho)}

        let preco = 0

        for (let i=0; i<cartFilho.length; i++) {
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
        


    render(){

        let cartFilho = this.props.cart


        return (
            <div className="ShoppingCart">
                <h2>Carrinho:</h2>

                {cartFilho.length > 0 ? (
                    <ul>
                        {this.renderizaCarrinho(cartFilho)}
                    </ul>
                ) : (
                <p>Carrinho vazio</p>
                )}

                <h3>Total:</h3> {this.calculaTotal(cartFilho)}




            </div>
        );
    }
}
