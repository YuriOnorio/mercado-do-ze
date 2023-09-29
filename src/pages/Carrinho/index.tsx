import React from "react";
import { StyleSheet, View } from "react-native";
import Produto from "./components/Produto";
import Topo from "./components/Topo";
import produto from '../../mocks/produto';




export default function Carrinho() {
  return (
    <>
      <View style={estilos.corFundo}>
        <Topo titulo={produto.topo.titulo}/>
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
