import React, { useState, useEffect } from "react";
import Card from "./Card";
import Data from "../Crypto/Data";
const Temp = () => {
	const styl = {
		height: "14em",
		width: "24em",
		background: "lightBlue",
		position: "fixed",
		right: "0%",
	};
	const [cart, setCart] = useState([]);
	const [final, setFinal] = useState(0);
	const [coupon, setCoupon] = useState(0);
	const calc = () => {
		let c = 0;
		for (let i = 0; i < cart.length; i++) {
			c += cart[i].totalprice;
		}
		console.log(c, typeof c);
		console.log(coupon);
		if (coupon === 0) {
			setFinal(c);
		} else {
			setFinal(c - (c * coupon) / 100);
		}
	};
	const handleChange = (val) => {
		setCoupon(val);
	};
	useEffect(calc, [cart, coupon]);
	const additem = (val) => {
		const ind = cart.findIndex((ele) => ele.id === val.id);
		if (ind === -1) {
			setCart([...cart, { ...val, quantity: 1, totalprice: val.price }]);
		} else {
			const upcart = cart.map((ele) => {
				if (ele.id === val.id) {
					return {
						...ele,
						quantity: ele.quantity + 1,
						totalprice: ele.price * (ele.quantity + 1),
					};
				}
				return ele;
			});
			setCart(upcart);
		}
		console.log(cart, "hehe");
	};
	const rem = (val) => {
		const ind = cart.findIndex((ele) => ele.id === val.id);
		if (ind !== -1) {
			let upcart = [];
			let flag = 0;
			upcart = cart.map((ele) => {
				if (ele.id === val.id) {
					if (ele.quantity === 1) {
						flag = 1;
					}
					return {
						...ele,
						quantity: ele.quantity - 1,
						totalprice: ele.price * (ele.quantity - 1),
					};
				}
				return ele;
			});
			if (flag === 1) {
				upcart = cart.filter((ele) => ele.id !== val.id);
			}
			console.log(upcart);
			setCart(upcart);
		}
	};
	return (
		<>
			<div className="container">
				<div className="row row-cols-3 ">
					{Data.map((val) => {
						return (
							<div className="card m-2" style={{ width: "18rem" }} key={val.id}>
								<img src={val.imgsrc} className="card-img" alt="Sorry" />
								<div className="card-body">
									<h5 className="card-title">Name: {val.name} </h5>
									<h5 className="card-title">Category: {val.category} </h5>
									<p className="card-text">Price: {val.price}</p>
									<p>
										<button type="button" onClick={(e) => additem(val)}>
											+
										</button>
										{"     "}
										<button type="button" onClick={(e) => rem(val)}>
											-
										</button>
									</p>
								</div>
							</div>
						);
					})}
					<div style={styl}>
						<table style={{ border: "2px solid black" }}>
							<thead style={{ border: "2px solid black" }}>
								<tr style={{ border: "2px solid black" }}>
									<th style={{ border: "2px solid black" }}>name</th>
									<th style={{ border: "2px solid black" }}>quantity</th>
									<th style={{ border: "2px solid black" }}>Total Price</th>
								</tr>
							</thead>
							<tbody style={{ border: "2px solid black" }}>
								{cart.map((cart) => {
									return (
										<tr style={{ border: "2px solid black" }} key={Card.id}>
											<td style={{ border: "2px solid black" }}>{cart.name}</td>
											<td style={{ border: "2px solid black" }}>
												{cart.quantity}
											</td>
											<td style={{ border: "2px solid black" }}>
												{cart.totalprice}
											</td>
										</tr>
									);
								})}
								<tr>
									<td style={{ border: "2px solid black" }}>coupon</td>
									<td style={{ border: "2px solid black" }}>Final</td>
								</tr>
								<tr>
									<td style={{ border: "2px solid black" }}>
										{" "}
										<select
											name=""
											id=""
											value={coupon}
											onChange={(e) => handleChange(e.target.value)}
										>
											<option value={0}>None</option>
											<option value={15}>15%</option>
											<option value={25}>25%</option>
										</select>{" "}
									</td>
									<td style={{ border: "2px solid black" }}>{final}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};
export default Temp;
