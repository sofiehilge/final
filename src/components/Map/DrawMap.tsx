import { useRef, useEffect } from "react";
import Draw from "ol/interaction/Draw.js";

import Map from "ol/Map.js";

import TileLayer from "ol/layer/WebGLTile.js";
import VectorLayer from "ol/layer/Vector.js";
import VectorSource from "ol/source/Vector.js";
import View from "ol/View.js";
import XYZ from "ol/source/XYZ.js";

const DrawMap = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const mapSource = new TileLayer({
      source: new XYZ({
        url: "https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=arbWFpzMUfWfbX78oSoD",
        maxZoom: 20,
      }),
    });

    //this is where the drawn features go
    const drawVector = new VectorLayer({
      source: new VectorSource(),
      style: {
        "stroke-color": "lightcoral",
        "stroke-width": 2,
        "fill-color": "rgba(156, 39, 176, 0.3)",
      },
    });

    const map = new Map({
      target: mapRef.current,
      layers: [mapSource, drawVector],
      view: new View({
        center: [1400918.2566687095, 7494195.501245048],
        zoom: 6,
        projection: "EPSG:3857",
      }),
    });

    let drawInteraction: any;

    const typeSelect = document.getElementById("type");

    function addInteraction() {
      //@ts-ignore
      const value = typeSelect.value;
      if (value !== "None") {
        drawInteraction = new Draw({
          type: value,
          //@ts-ignore
          source: drawVector.getSource(),
          trace: true,
        });
        map.addInteraction(drawInteraction);
      }
    }
    //@ts-ignore
    typeSelect.onchange = function () {
      //@ts-ignore
      map.removeInteraction(drawInteraction);

      addInteraction();
    };
    addInteraction();

    console.log("map render");
    return () => map.setTarget(undefined);
  }, []);
  return (
    <>
      <div ref={mapRef} style={{ width: "100%", height: "100%" }} />
      <form style={{ width: "100%", display: "flex", justifyContent: "center", gap: "20px" }}>
        <label htmlFor="type">Geometry type &nbsp;</label>
        <select id="type" style={{ border: "2px solid lightcoral", borderRadius: "4px", padding: "5px" }}>
          <option value="Polygon">Polygon</option>
          <option value="LineString">Line</option>
          <option value="None">None</option>
        </select>
      </form>
    </>
  );
};

export default DrawMap;
