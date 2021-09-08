import React, { useEffect } from "react";
import "./spider.css";

const Spider = () => {
	useEffect(() => {
		const svg = document.querySelector(".peas");
		let mouseX = document.getElementById("name").selectionStart;
		let pupilPadding = 0;
		// ------------
		// Mouse events
		// ------------
		window.addEventListener("keydown", keypress);
		function keypress(e) {
			mouseX = document.getElementById("name").selectionStart;
		}
		// ---
		// Pea
		// ---
		class Pea {
			constructor(className) {
				this.pea = svg.querySelector(className);
				this.eyeLeft = {
					element: this.pea.querySelector(".eye-left"),
					get radius() {
						return parseInt(this.element.getAttribute("rx"));
					},
					get xMin() {
						return (
							parseInt(this.element.getAttribute("cx")) -
							this.radius +
							pupilPadding
						);
					},
					get xMax() {
						return parseInt(this.element.getAttribute("cx"));
					},
					get center() {
						return getItemCenter(this.element.getAttribute("cx"));
					},
				};
				this.eyeRight = {
					element: this.pea.querySelector(".eye-right"),
					get radius() {
						return parseInt(this.element.getAttribute("rx"));
					},
					get xMin() {
						return (
							parseInt(this.element.getAttribute("cx")) -
							this.radius +
							pupilPadding
						);
					},
					get xMax() {
						return (
							parseInt(this.element.getAttribute("cx")) +
							this.radius -
							pupilPadding
						);
					},
					get center() {
						return getItemCenter(
							this.element.getAttribute("cx"),
							this.element.getAttribute("cy")
						);
					},
				};
				this.pupilLeft = {
					element: this.pea.querySelector(".pupil-left"),
					get radius() {
						return parseInt(this.element.getAttribute("rx"));
					},
					get center() {
						return getItemCenter(this.element.getAttribute("cx"));
					},
				};
				this.pupilRight = {
					element: this.pea.querySelector(".pupil-right"),
					get radius() {
						return parseInt(this.element.getAttribute("rx"));
					},
					get center() {
						return getItemCenter(this.element.getAttribute("cx"));
					},
				};
				this.pupilLeft.element.setAttribute(
					"cx",
					this.eyeLeft.xMin + this.pupilLeft.radius * 2
				);
				this.pupilRight.element.setAttribute(
					"cx",
					this.eyeRight.xMin + this.pupilRight.radius * 2
				);
				this.pea.addEventListener("mouseenter", function () {
					this.classList.add("pea-hovered");
				});
				this.pea.addEventListener("mouseleave", function () {
					this.classList.remove("pea-hovered");
				});
			}
			update() {
				let amountX =
					(this.eyeLeft.xMax - this.eyeLeft.xMin - this.pupilLeft.radius * 3) *
					mouseX;
				this.pupilLeft.element.style.transform = `translate(${amountX}px`;
				this.pupilRight.element.style.transform = `translate(${amountX}px`;
			}
		}
		const peas = [new Pea(".pea-1")];
		// --------------
		// Animation loop
		// --------------
		function loop() {
			for (let pea of peas) {
				pea.update();
			}
			requestAnimationFrame(loop);
		}
		loop();
		// ----------------
		// Helper functions
		// ----------------
		function getItemCenter(x, y) {
			return {
				x: svg.clientWidth / 2 + x * window.devicePixelRatio,
			};
		}
	});
	return (
		<>
			<div className="spider">
				<svg
					height="110"
					width="160"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					className="peas"
					xlink="http://www.w3.org/1999/xlink"
				>
					<g transform="scale(.115)" className="pea pea-1">
						<line
							id="Line 1"
							x1="316.037"
							y1="427.764"
							x2="69.0374"
							y2="320.764"
							stroke="black"
							strokeWidth="30"
						/>
						<line
							id="Line 2"
							x1="87.3376"
							y1="315.531"
							x2="22.3376"
							y2="409.531"
							stroke="black"
							strokeWidth="30"
						/>
						<line
							id="Line 7"
							y1="-15"
							x2="269.18"
							y2="-15"
							transform="matrix(0.917601 -0.397503 -0.397503 -0.917601 690 414)"
							stroke="black"
							strokeWidth="30"
						/>
						<line
							id="Line 8"
							y1="-15"
							x2="114.285"
							y2="-15"
							transform="matrix(0.568755 0.822507 0.822507 -0.568755 937 307)"
							stroke="black"
							strokeWidth="30"
						/>
						<line
							id="Line 3"
							x1="296.184"
							y1="495.208"
							x2="27.3801"
							y2="480.979"
							stroke="black"
							strokeWidth="30"
						/>
						<line
							id="Line 4"
							x1="42.7101"
							y1="469.698"
							x2="14.5371"
							y2="580.456"
							stroke="black"
							strokeWidth="30"
						/>
						<line
							id="Line 9"
							y1="-15"
							x2="269.18"
							y2="-15"
							transform="matrix(0.998602 -0.0528616 -0.0528616 -0.998602 715 480.229)"
							stroke="black"
							strokeWidth="30"
						/>
						<line
							id="Line 10"
							y1="-15"
							x2="114.285"
							y2="-15"
							transform="matrix(0.246516 0.969139 0.969139 -0.246516 983.804 466)"
							stroke="black"
							strokeWidth="30"
						/>
						<line
							id="Line 5"
							x1="299.359"
							y1="597.826"
							x2="33.2935"
							y2="638.657"
							stroke="black"
							strokeWidth="30"
						/>
						<line
							id="Line 6"
							x1="46.0038"
							y1="624.489"
							x2="40.9855"
							y2="738.664"
							stroke="black"
							strokeWidth="30"
						/>
						<line
							id="Line 11"
							y1="-15"
							x2="269.18"
							y2="-15"
							transform="matrix(0.988429 0.151685 0.151685 -0.988429 666 603)"
							stroke="black"
							strokeWidth="30"
						/>
						<line
							id="Line 12"
							y1="-15"
							x2="114.285"
							y2="-15"
							transform="matrix(0.04391 0.999036 0.999036 -0.04391 932.066 643.831)"
							stroke="black"
							strokeWidth="30"
						/>
						<ellipse
							id="Ellipse 1"
							cx="493.5"
							cy="503.5"
							rx="258.5"
							ry="183.5"
							fill="black"
						/>

						<rect
							className="teeth"
							id="Rectangle 1"
							x="583"
							y="587.742"
							width="34"
							height="33"
							transform="rotate(-29.5 583 587.742)"
							fill="white"
						/>
						<path
							className="tongue"
							id="Vector 2"
							d="M493 633C493 660.845 504 662.512 504 633H493Z"
							stroke="white"
							strokeWidth="39"
						/>

						<path
							id="Vector 1"
							d="M636 550C603.806 591.288 522.394 616 454 616"
							stroke="white"
							strokeWidth="10"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<ellipse
							className="eye eye-left"
							id="Ellipse 3"
							cx="592"
							cy="451.5"
							rx="44"
							ry="37.5"
							fill="white"
						/>
						<ellipse
							className="eye eye-right"
							id="Ellipse 2"
							cx="390"
							cy="451.5"
							rx="44"
							ry="37.5"
							fill="white"
						/>
						<ellipse
							className="pupil pupil-right"
							id="Ellipse 4"
							cx="390.5"
							cy="466"
							rx="14.5"
							ry="15"
							fill="black"
						/>
						<ellipse
							className="pupil pupil-left"
							id="Ellipse 5"
							cx="591.5"
							cy="466"
							rx="14.5"
							ry="15"
							fill="black"
						/>
						<line
							id="Line 13"
							x1="498"
							x2="498"
							y2="320"
							stroke="black"
							strokeWidth="8"
						/>
					</g>
				</svg>
			</div>
		</>
	);
};

export default Spider;
