import React, { Component } from "react";
import "./../ar.css";
import model from "../assets/floorPlan.glb";

export default class ARView extends Component {
  componentDidMount() {
    //A-SCENE
    let aScene = document.createElement("a-scene");
    aScene.setAttribute("arjs", "debugUIEnabled: false");
    //A-MARKER
    let aMarker = document.createElement("a-marker-camera");
    aMarker.setAttribute("preset", "hiro");
    let aChair = document.createElement("a-entity");
    aChair.setAttribute("position", "0 0 0");
    aChair.setAttribute("scale", "0.005 0.003 0.003");
    aChair.setAttribute("gltf-model", `${model}`);
    aMarker.appendChild(aChair);
    aScene.appendChild(aMarker);
    document.body.appendChild(aScene);
  }

  render() {
    return null;
  }
}
