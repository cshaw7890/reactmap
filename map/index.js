import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

import "./index.css";

var geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

var App = React.createElement(
	"div",
	null,
	React.createElement(
		ComposableMap,
		null,
		React.createElement(
			Geographies,
			{ geography: geoUrl },
			function (_ref) {
				var geographies = _ref.geographies;
				return geographies.map(function (geo) {
					return React.createElement(Geography, { key: geo.rsmKey, geography: geo });
				});
			}
		),
		React.createElement(
			Marker,
			{
				coordinates: [-74.006, 40.7128],
				style: {
					default: { fill: "orange" },
					hover: { fill: "green" },
					pressed: { fill: "orange" }
				}
			},
			React.createElement("circle", {
				r: 5,
				onClick: function onClick() {
					console.log("Hello");
				}
			})
		),
		React.createElement(
			Marker,
			{
				coordinates: [-79.006, 35.7128]
			},
			React.createElement("circle", { r: 5, fill: "#F53" })
		),
		React.createElement(
			Marker,
			{
				coordinates: [-64.006, 56.7128]
			},
			React.createElement("circle", { r: 5, fill: "#F53" })
		),
		React.createElement(
			Marker,
			{
				coordinates: [-87.006, 37.7128]
			},
			React.createElement("circle", { r: 5, fill: "#F53" })
		),
		React.createElement(
			Marker,
			{
				coordinates: [-99.006, 37.7128]
			},
			React.createElement("circle", { r: 5, fill: "#F53" })
		)
	)
);

//const rootElement = document.getElementById("root");
//ReactDOM.render(<App />, rootElement);

var domContainer = document.querySelector('#map_container');
ReactDOM.render(App, domContainer);