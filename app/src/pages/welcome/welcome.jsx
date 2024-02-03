import React from "react";
import ROUTES from "Constants/routes";
import { Link } from "react-router-dom";
import "./welcome.css";
import * as THREE from 'three';

function element() {
var container = $("#canvas");
var canvasWidth = container.width();
var canvasHeight = container.height();

console.log(canvasWidth);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, canvasWidth / canvasHeight, 0.1, 1000 );

// this creates a 3d rendering context and
// a canvas
var renderer = new THREE.WebGLRenderer( { alpha: true } );
renderer.setSize( canvasWidth, canvasHeight );
renderer.setClearColor( 0x000000, 0 );

// the canvas is part of the renderer as a HTML DOM
// element and needs to be appended in the DOM
container.get(0).appendChild( renderer.domElement );

var geometry = new THREE.SphereGeometry( 2, 12, 12 );
var material = new THREE.MeshBasicMaterial({
      color : 0x92ff38,
      wireframe : true,
      wireframeLinewidth: 2
    });
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function render() {
  requestAnimationFrame( render );
  //cube.rotation.x += 0.02;
  cube.rotation.y += 0.008;
  renderer.render( scene, camera );
}
render();
};
class Welcome extends React.Component {

  render() {

    return (

      <React.Fragment>
        <section className="section">
          <div className="container ">
            <div id="canvas"></div>
            {element}

            




            <h2 className="crt content ">Omni Bots</h2>
            <div>
            <span className="crt">  ═══════[†]═══════  </span> <br />
            <br />
            {/*
              <Link className="btn crt" to={ROUTES.MOTD}>Using the Electron store</Link> <br />
              <Link className="btn crt" to={ROUTES.LOCALIZATION}>Changing locales.</Link> <br />
              <Link className="btn crt" to={ROUTES.UNDOREDO}>Undo/redoing actions.</Link> <br />
              <Link className="btn crt" to={ROUTES.CONTEXTMENU}>Custom context menu.</Link> <br />
              <Link className="btn crt" to={ROUTES.IMAGE}>Sample image loaded.</Link> <br />
            */}

              <Link className="btn crt" to={ROUTES.AITRADING}>Ultimate Trading</Link> <br />
              
              <Link className="btn crt" to={ROUTES.AVIATOR}>Aviator</Link> <br />
              <Link className="btn crt" to={ROUTES.CRYPTOTRACKER}>Crypto Tracker</Link> <br />
              
              <Link className="btn crt" to={ROUTES.INSTAGRAM}>Instagram</Link> <br />
              <Link className="btn crt" to={ROUTES.MANCHESTERUNITED}>Manchester United</Link> <br />
              <Link className="btn crt" to={ROUTES.OPENAICHAT}>Open AI Chat</Link> <br />
              <Link className="btn crt" to={ROUTES.SNEAKERMONITOR}>Sneaker Monitor</Link> <br />
              <Link className="btn crt" to={ROUTES.TICKETMASTER}>TicketMaster</Link> <br />
              <Link className="btn crt" to={ROUTES.TIKTOK}>Tik Tok</Link> <br />
              <Link className="btn crt" to={ROUTES.AISCRAPER}>AI Scraper</Link> <br />
            {/*
              <Link className="btn crt" to={ROUTES.SNKRSAPP}>SNKRS app</Link> <br />
              <Link className="btn crt" to={ROUTES.MATTEL}>Mattel</Link> <br />
              <Link className="btn crt" to={ROUTES.STUBHUB}>Stubhub</Link> <br />
              <Link className="btn crt" to={ROUTES.GAMETIME}>Game Time</Link> <br />
            */}

            </div>
          </div>
        </section>
      </React.Fragment>
    );

  }


}

export default Welcome;
