import 'leaflet/dist/leaflet.css';
import React, { Component } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet';
import { render } from 'react-dom';
class MyMap extends Component{
    render(){


        return (

            <div >
                <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: 300, width:"100%" }} >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>

                    </Marker>
                </MapContainer>
            </div>

            );
    }
}
export default MyMap;