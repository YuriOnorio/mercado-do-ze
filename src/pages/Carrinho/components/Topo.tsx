import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";
import topo from "../../../../assets/topo.png";


const width = Dimensions.get("screen").width;

export default function Topo() {
    return <>
    <Image source={topo} style={estilos.topo} />
    </>
}

const estilos = StyleSheet.create({
    topo: {
      width: "100%",
      height: (578 / 768) * width,
    }
  });
  