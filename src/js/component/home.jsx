import React from "react";
import "./styles.css";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color1, setColor1] = useState("red");

	function changeColor() {
		color1 === "red"
			? setColor1("este boton debe estar encendido ")
			: setColor1("este boton debe estar apagado");
	}

	return (
		<div>
			<ul className="traffic-light">
				{lights.map((isActive, index) => (
					<li key={index} onClick={() => setActiveLight(isActive, index)}>
						<span className={isActive ? "on" : "off"} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
