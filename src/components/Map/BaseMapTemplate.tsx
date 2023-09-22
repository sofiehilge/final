import { useEffect, useRef } from "react";
import { Map, View } from "ol";
import { Tile as TileLayer } from "ol/layer";
import { XYZ } from "ol/source";

const BaseMapTemplate = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const mapSource = new TileLayer({
      source: new XYZ({
        url: "http://mt{0-3}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
      }),
    });

    const map = new Map({
      target: mapRef.current,
      layers: [mapSource],
      view: new View({
        center: [0, 0],
        zoom: 3,
        projection: "EPSG:3857",
      }),
    });

    console.log("map render");
    return () => map.setTarget(undefined);
  }, []);
  return <div ref={mapRef} style={{ width: "100%", height: "100%" }} />;
};

export default BaseMapTemplate;
