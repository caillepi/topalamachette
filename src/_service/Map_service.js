import { Icon } from "leaflet";
import PIN from "../_img/pin.png";
import PIN_2 from "../_img/pin2.png";

const markers = [
    /*
    {
        'id': 0,
        'center': [-22.271072, 166.441650]
    },
    {
        'id': 1,
        'center': [-20.969065,  167.226035]
    },
    {
        'id': 2,
        'center': [-22.6154562, 167.480045]
    }
    */
]

// const mapCenter = [-22.271072, 166.441650]
const mapCenter = [-21.483504, 165.938111]

const mapZoom = 7

const customIcon = new Icon({
    iconUrl: PIN,
    iconSize: [38, 38]
});

const customNewPin = new Icon({
    iconUrl: PIN_2,
    iconSize: [38, 38]
});

// MAP CONTROL
let markerClickHandler = (map, pos) => {
    alert("toto");
    map.flyTo(pos);
}

let markerDoubleClickHandler = (map, marker) => {

        map.removeLayer(marker);
}

let onNoumeaButtonClickHandler = (map) => {
    map.flyTo([-22.27, 166.44], 12);
}

let onNCButtonClickHandler = (map) => {
    map.flyTo([-21.305273434951814, 165.65734863281253], 7)
}

export const mapService = {
    markers, mapCenter, mapZoom, customIcon, customNewPin, markerClickHandler, markerDoubleClickHandler, onNoumeaButtonClickHandler, onNCButtonClickHandler
}