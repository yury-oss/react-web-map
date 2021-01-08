import 'leaflet/dist/leaflet.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import {  MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { dataPoints } from './dataPoints';


//import {  } from 'react-leaflet-heatmap-layer';


class MyMap extends Component{

    

    render(){
        
           
        return (

            <div >
                <MapContainer center={[41.16653, 34.25062]} zoom={11} style={{ height: 600, width: "100%" }} >
                    
                    <TileLayer
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />

                </MapContainer>
            </div>

            );
    }
}
export default MyMap;