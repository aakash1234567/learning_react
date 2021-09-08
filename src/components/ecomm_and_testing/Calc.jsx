import React, { Component } from 'react'

class Calc extends Component{

    render() {
        const styl = {
            height:"14em",
            width:"12em",
            background:"lightBlue",
            position: "fixed",
            right: "0%"
        }
        return (
            <div style={styl}>
                <ul>
                    <li>Total Products : {this.props.data.totalProd}</li>
                    <li>Total Price : {this.props.data.totalPrice} </li>
                </ul>
            </div>
        )
    }
}

export default Calc