import React,{Component} from 'react'
class Coin extends Component { 
    state = {
        coinPrice: 0
    } 
    componentDidMount() {
        // const temp = this.state.coinIds.join("%2C")
        fetch("https://api.coingecko.com/api/v3/simple/price?ids="+this.props.data.id+"&vs_currencies=inr")
        .then(response => response.json())
            .then(
              (result) => {
                console.log(result,"here")
                this.setState({coinPrice: Object.values(result[this.props.data.id])})
              },
              (error) => {
                console.log(error)
              }
            )
      }
    render(){
        console.log(this.state.coinPrice,"check")
        return <>
        <div className="card m-2" style={{width: "16rem"}}>
        <img src={this.props.data.large} className="card-img" alt="Sorry"/>
        <div className="card-body">
            <h5 className="card-title">Name: {this.props.data.name}   </h5>
            <p className="card-text">Market Cap Rank: {this.props.data.market_cap_rank}   </p>
            <p className="card-text">Symbol: {this.props.data.symbol}   </p>
            <p className="card-text">Price: {this.state.coinPrice}
            </p>
        </div>
        </div>
        </>
    }

}

export default Coin;
