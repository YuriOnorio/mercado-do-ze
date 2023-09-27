import React from "react";
import { StyleSheet, View } from "react-native";
import Produto from "./components/Produto";
import Topo from "./components/Topo";




export default function Carrinho() {
  return (
    <>
      <View style={estilos.corFundo}>
        <Topo/>
        <Produto/>

      </View>
    </>
  );
}

const estilos = StyleSheet.create({

  corFundo: {
    backgroundColor: "#F1F0F0",
  }
});
