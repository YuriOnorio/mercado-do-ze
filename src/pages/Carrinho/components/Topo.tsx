import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";
import topo from "../../../../assets/topo.png";
import Logo3 from "../../../../assets/Logo3.png";

type Props = {
  titulo: string;
};

const width = Dimensions.get("screen").width;

export default function Topo({titulo}: Props) {
  return (
    <>
      <Image source={Logo3} style={estilos.topo} />
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
});
