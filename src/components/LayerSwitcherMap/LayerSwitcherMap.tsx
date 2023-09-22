import { useRef, useEffect } from "react";
import TileLayer from "ol/layer/Tile";
import Map from "ol/Map";
import View from "ol/View";
import XYZ from "ol/source/XYZ";
import LayerSwitcher from "ol-ext/control/LayerSwitcher";
import "ol-ext/dist/ol-ext.css";
import "ol/ol.css";
import ImageLayer from "ol/layer/Image";
import Static from "ol/source/ImageStatic";
import Projection from "ol/proj/Projection";
// import { Group } from "ol/layer";

const LayerSwitcherMap = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const satelite = new TileLayer({
      //@ts-ignore
      title: "Satelite",
      source: new XYZ({
        url: "http://mt{0-3}.google.com/vt/lyrs=t&x={x}&y={y}&z={z}",
        maxZoom: 20,
      }),
    });

    const terrain = new TileLayer({
      //@ts-ignore
      title: "Terrain",
      source: new XYZ({
        url: "https://api.maptiler.com/tiles/terrain-rgb-v2/{z}/{x}/{y}.webp?key=arbWFpzMUfWfbX78oSoD",
      }),
    });

    const lightGrayBase = new TileLayer({
      //@ts-ignore
      title: "LightGrayBase",
      source: new XYZ({
        url: "http://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
      }),
    });

    const darkGrayBase = new TileLayer({
      //@ts-ignore
      title: "DarkGrayBase",
      source: new XYZ({
        url: "http://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
      }),
    });

    const reliefShaded = new TileLayer({
      //@ts-ignore
      title: "ReliefShadedBase",
      source: new XYZ({
        url: "http://services.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}",
      }),
    });

    // var baseLayers1 = new Group({
    //   //@ts-ignore
    //   title: "Base Layers1",
    //   openInLayerSwitcher: false,
    //   layers: [basemap, satelite],
    // });
    // var baseLayers2 = new Group({
    //   //@ts-ignore
    //   title: "Base Layers2",
    //   openInLayerSwitcher: false,
    //   layers: [basemap, satelite],
    // });

    const map = new Map({
      target: mapRef.current,
      layers: [satelite, terrain, lightGrayBase, darkGrayBase, reliefShaded],
      view: new View({
        center: [0, 0],
        zoom: 3,
        projection: "EPSG:3857",
      }),
      controls: [
        new LayerSwitcher({
          collapsed: true,
          reordering: true,
        }),
      ],
    });

    console.log("map render");
    //@ts-ignore
    return () => map.setTarget(undefined);
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "100%", zIndex: 5, position: "relative" }} />;
};

export default LayerSwitcherMap;
