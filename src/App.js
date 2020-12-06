import 'leaflet/dist/leaflet.css';
import MyMap from './MyMap';
import React, { Component } from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';


function App() {
    return (
        <div >
            <MyMap/>
            </ div>
  
  );
}

export default App;
