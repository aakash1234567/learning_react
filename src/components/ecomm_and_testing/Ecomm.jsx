import React, { Component } from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Calc from "./Calc";
import ProductData from "./ProductData";

class Ecomm extends Component {
	state = {
		totalProd: 0,
		totalPrice: 0,
		data: ProductData,
	};
	handleBuying = (data) => {
		const temp = [...this.state.data];
		const ind = data.id;
		// temp[ind] = {...data}
		temp[ind].buyed = true;
		this.setState({ data: temp });
		// console.log(id )

		var tPrice = this.state.totalPrice;
		tPrice += data.price;
		this.setState({ totalPrice: tPrice });

		var tProd = this.state.totalProd;
		tProd += 1;
		this.setState({ totalProd: tProd });
	};
	handleCancel = (data) => {
		const temp = [...this.state.data];
		const ind = data.id;
		// temp[ind] = {...data}
		temp[ind].buyed = false;
		this.setState({ data: temp });
		// console.log(id )
		console.log("canceled");

		var tPrice = this.state.totalPrice;
		tPrice -= data.price;
		this.setState({ totalPrice: tPrice });

		var tProd = this.state.totalProd;
		tProd -= 1;
		this.setState({ totalProd: tProd });
	};
	handleSearch = (data) => {
		if (data === "") {
			let temp = [...ProductData];
			this.setState({ data: temp });
		} else {
			let temp = [...ProductData];
			temp = temp.filter((val) => val.category.startsWith(data));
			// console.log(temp)
			this.setState({ data: temp });
		}
		// console.log(data)
	};
	render() {
		return (
			<>
				<Navbar onSearch={this.handleSearch} />
				<Calc data={this.state} />
				<Cards
					ProductData={this.state.data}
					onBuyingParent={this.handleBuying}
					onCancelParent={this.handleCancel}
				/>
			</>
		);
	}
}

export default Ecomm;
