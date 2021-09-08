import React, { Component } from "react";
import Card from "./Card";
class Cards extends Component {
	state = {};
	render() {
		return (
			<>
				<div className="container">
					<div className="row row-cols-3 ">
						{this.props.ProductData.map((val) => (
							<Card
								key={val.id}
								data={val}
								onBuying={this.props.onBuyingParent}
								onCancel={this.props.onCancelParent}
							/>
						))}
					</div>
				</div>
			</>
		);
	}
}

export default Cards;
