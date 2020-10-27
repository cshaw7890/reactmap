import React from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

import "./index.css";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const App = () => (
  <div>
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
        }
      </Geographies>
	  <Marker coordinates={[-74.006, 40.7128]}>
        <circle r={5} fill="#F53" />
      </Marker>
    </ComposableMap>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
