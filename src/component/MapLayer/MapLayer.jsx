import React, { useEffect, useState } from "react"
import "leaflet/dist/leaflet.css"

import { MapContainer, Marker, Popup, TileLayer, useMapEvent } from 'react-leaflet'
import L from "leaflet";
import "./MapLayer.css";
import { mapService } from "../../_service/Map_service";
import { useNavigate } from "react-router-dom";


function MapLayer ({mapCenter, zoom, markersProps}) {
    const [map, setMap] = useState();      
    
    let navigate = useNavigate()

    function MapEvents () {
        let map = useMapEvent(
        {
        })
        // initialize map state
        useEffect(() => {
            setMap(map);
        })
        return null;
    }
    useEffect(() => {
        if (map !== undefined)
        {
            MapMarkers();
        }
    })

    let navigateToPost = (uid) => {
        navigate("./posts/" + uid, { replace: false })
    }

    let MapMarkers = () => {
        // return (
        //     markersProps.map((marker) => {
        //         // L.marker(marker.center, {icon: mapService.customIcon})
        //         //     .bindPopup("<div><button type='button' onclick = {navigateToPost(marker.id)}>Voir le post</button></div>")
        //         //     .addTo(map)
        //             <Marker position = { marker.center } icon = { mapService.customIcon }>

        //             </Marker>
        //     })
        // )
        
    }

    return (
        <MapContainer
            center = { mapCenter }
            zoom = { zoom }
            >
            {/* <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/">Open Street Map</a> | <a href="https://smashicons.com/">smashicons</a>' 
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" id = "map"/> */}

            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/">Open Street Map</a> | <a href="https://smashicons.com/">smashicons</a>' 
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png" id = "map"/>

            {
                markersProps.map((marker, index) => {
                    return (
                        <Marker position = { marker.center } icon = { mapService.customIcon } key = { index }>
                            {
                                index != 0 && 
                                <Popup>
                                    <button type='button' onClick = {() => navigateToPost(marker.id)} className = 'leaftletPopupLink' >Voir le post lié à ce point</button>
                                </Popup>
                            }
                            
                        </Marker>
                    )
                })
            }

            <MapEvents />
        </MapContainer>      
    )
}

export default MapLayer;

/*
    let mouseDownDate;
    let mouseUpDate;

    let map = document.getElementById("mapContainer");

    map.addEventListener("mousedown", (event) => {
        mouseDownDate = Date.now();
    });

    map.addEventListener("mouseup", (event) => {
        mouseUpDate = Date.now();

        // 500 milliseconds
        if ((mouseUpDate - mouseDownDate) > 700) {
            console.log("Long click is detected !");


        }
    });
    
    <Row>
                <Col className = "mapButtonCol" >
                    <button 
                        type="button" 
                        onClick = { () => mapService.onNoumeaButtonClickHandler(map) } 
                        onContextMenu = { () => mapService.onNoumeaButtonClickHandler(map) } >Centrer sur Nouméa</button>
                </Col>
                <Col className = "mapButtonCol" >
                    <button type="button" onClick = { () => mapService.onNCButtonClickHandler(map) } >Centrer sur la Calédonie</button>
                </Col>
            </Row>
*/