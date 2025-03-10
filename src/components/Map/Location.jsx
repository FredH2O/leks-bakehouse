import { useEffect, useRef } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import { Icon, Style } from "ol/style";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

const OpenLayersMap = () => {
  const position = [53.35634116647443, -6.451055463558045]; // New coordinates
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize the map
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([-6.451055463558045, 53.35634116647443]), // Center of the map (longitude, latitude)
        zoom: 14, // Initial zoom level
      }),
    });

    // Add a marker
    const marker = new Feature(
      new Point(fromLonLat([-6.451055463558045, 53.35634116647443]))
    );
    marker.setStyle(
      new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: "/images/marker-icon.png", // Path to your custom icon
        }),
      })
    );

    const vectorSource = new VectorSource({
      features: [marker],
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    map.addLayer(vectorLayer);

    // Cleanup function to destroy the map instance
    return () => {
      map.setTarget(null); // Clean up the map instance
    };
  }, []);

  return <div ref={mapRef} className="w-full h-full" />;
};

export default OpenLayersMap;
