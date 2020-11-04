import React from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

import "./index.css";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

function moveBox(key){
	var v = document.getElementById(key);
	v.style.top = (window.event.clientY - 50) + "px";
	v.style.left = (window.event.clientX - 100)+ "px";
	v.style.display = 'block';
	hide(key);
}

var clickCount = 0;

var specifiedElement;


function hide(key){
	specifiedElement = document.getElementById(key);
	
	document.addEventListener('click', showBox);
}
	
function showBox(event){	
	clickCount++;
	console.log(clickCount);
	var isClickInside = specifiedElement.contains(event.target);

	if (clickCount > 1 && !isClickInside) {
		 var divsToHide = document.getElementsByClassName("farmer");
			for(var i = 0; i < divsToHide.length; i++){
				divsToHide[i].style.display = "none";
			}
		
		//specifiedElement.style.display = 'none';
		document.removeEventListener('click', showBox);
		clickCount = 0;
	}
}


const App = () => {
	return (
		<div style={{ width: "80%" }}>
			<ComposableMap>
			  <Geographies geography={geoUrl}>
				{({ geographies }) =>
				  geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
				}
			  </Geographies>
			  

				<Marker 
					key="bobs"
					coordinates={[-74.006, 40.7128]}
					style={{
						default: { fill: "orange" },
						hover: { fill: "green" },
						pressed: { fill: "orange" }
					}}
				>
					<circle 
						r={5} 
						onClick={() => {
							moveBox("bobs");
						}}
					/>
				</Marker>
				
				<Marker 
					key="sandyc"
					coordinates={[152, 200]}
					style={{
						default: { fill: "orange" },
						hover: { fill: "green" },
						pressed: { fill: "orange" }
					}}
				>
					<circle 
						r={5} 
						onClick={() => {
							moveBox("sandyc");
						}}
					/>
				</Marker>
				
				<Marker 
					key="lengyelf"
					coordinates={[-80, 50]}
					style={{
						default: { fill: "orange" },
						hover: { fill: "green" },
						pressed: { fill: "orange" }
					}}
				>
					<circle 
						r={5} 
						onClick={() => {
							moveBox("lengyelf");
						}}
					/>
				</Marker>


			</ComposableMap>
			
			<div className="farmer" id="bobs">
				<p>Bob Smith</p>
				<p>Bob Smith's Tomato Farm</p>
				<p>New York, USA</p>
				<p>Participated from 2017-2018</p>
				<a href = "https://bobsmithtomatofarm.com"> Website</a>
			</div>
			
			<div className="farmer" id="sandyc">
				<p>Sandy Cheeks</p>
				<p>Sandy's treedome</p>
				<p>Bikini Bottom, Pacific Ocean</p>
				<p>Participated from 2015-2016</p>
				<a href="https://wikipedia.org/wiki/Sandy_Cheeks">Website</a>
			</div>
			
			<div className="farmer" id="lengyelf">
				<p>Felix Lengyel</p>
				<p>The Juice Farm</p>
				<p>Canada</p>
				<p>Participated in 2019</p>
				<a href="https://www.twitch.tv/xqcow">Website</a>
			</div>
			
		  </div>

		);
		
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
