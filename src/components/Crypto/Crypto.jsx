import React, { Component } from "react";
import Coin from "./Coin";
class Crypto extends Component {
	state = {
		coinList: [],
		coinIds: [],
	};

	componentDidMount() {
		fetch("https://api.coingecko.com/api/v3/search/trending")
			.then((response) => response.json())
			.then(
				(result) => {
					console.log(result.coins[0].item.id);
					var li = [];
					var ids = [];
					for (let i = 0; i < result.coins.length; i++) {
						li.push(result.coins[i].item);
						ids.push(result.coins[i].item.id);
					}
					this.setState({ coinList: li });
					this.setState({ coinIds: ids });
				},
				(error) => {
					console.log(error);
				}
			);
	}
	render() {
		return (
			<>
				<h1>Trending Coins</h1>
				<div className="container">
					<div className="row row-cols-3 ">
						{this.state.coinList.map((val, ind) => (
							<Coin key={ind} data={val} />
						))}
					</div>
				</div>
			</>
		);
	}
}

export default Crypto;
