import { useEffect, useRef } from "react";
import { Map, View } from "ol";
import { Tile as TileLayer } from "ol/layer";

import BingMaps from "ol/source/BingMaps.js";
import "ol/ol.css";

const BingMap = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const styles = ["RoadOnDemand", "Aerial", "AerialWithLabelsOnDemand", "CanvasDark"];
    //@ts-ignore
    const layers = [];
    let i, ii;
    for (i = 0, ii = styles.length; i < ii; ++i) {
      layers.push(
        new TileLayer({
          visible: false,
          preload: Infinity,
          source: new BingMaps({
            key: "AhtCIb5IaK0D8cKD-mwgp5t2OmiwLVczJnD1r60M9bD-KpaT6lu_Z8YfyjXdZR3T",
            imagerySet: styles[i],
            // placeholderTiles: false, // Optional. Prevents showing of BingMaps placeholder tiles
          }),
        })
      );
    }

    const map = new Map({
      target: mapRef.current,
      layers: layers,
      view: new View({
        center: [1400918.2566687095, 7494195.501245048],
        zoom: 13,
        projection: "EPSG:3857",
      }),
    });

    const select = document.getElementById("layer-select");

    function onChange() {
      //@ts-ignore
      const style = select.value;
      for (let i = 0, ii = layers.length; i < ii; ++i) {
        //@ts-ignore
        layers[i].setVisible(styles[i] === style);
      }
      //@ts-ignore
    }
    //@ts-ignore
    select.addEventListener("change", onChange);
    onChange();
    console.log("map render");
    return () => {
      select?.removeEventListener("change", onChange);
      map.setTarget(undefined);
    };
  }, []);
  return (
    <>
      <div ref={mapRef} style={{ width: "100%", height: "100%" }} />
      <select defaultValue={"DEFAULT"} id="layer-select">
        <option value="Aerial">Aerial</option>
        <option value="AerialWithLabelsOnDemand" selected>
          Aerial with labels
        </option>
        <option value="RoadOnDemand">Road</option>
        <option value="CanvasDark">Road dark</option>
      </select>
    </>
  );
};

export default BingMap;
