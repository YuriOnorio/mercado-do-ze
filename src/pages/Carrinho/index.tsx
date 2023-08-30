import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";
import topo from "../../../assets/topo.png";
import logo from "../../../assets/logo.png";
import saque from "../../../assets/saque.png";
import jack from "../../../assets/jack.png";
import RedLabel from "../../../assets/RedLabel.png";
import Ballantines from "../../../assets/Ballantines.png";
import Royal from "../../../assets/Royal.png";

const width = Dimensions.get("screen").width;

export default function Carrinho() {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Text style={estilos.titulo}>Detelhe do Carrinho</Text>

      <View style={estilos.carrinho}>
        <Text style={estilos.titulocarrinho}>Carrinho de compras</Text>

        <View style={estilos.fazenda}>
          <Image style={estilos.imagemFazenda} source={logo} />
          <Text style={estilos.nomefazenda}>Supermercados Panelão</Text>
        </View>

        <Text style={estilos.descricao}>
          Sempre com a qualiade e preço justo
        </Text>

        <View style={estilos.divProduto}>
          <Image style={estilos.imagemProduto} source={saque} />
          <View>
           <Text style={estilos.nomeProduto}>Garrafa de saque sakai 750Ml</Text>
           <Text style={estilos.preco}>R$ 25,90</Text>
           <Text style={estilos.descricao}>
            Proibido a venda para menores de 18 anos
           </Text>
          </View>
        </View>

        <View style={estilos.divProduto}>
          <Image style={estilos.imagemProduto} source={jack} />
          <View>
           <Text style={estilos.nomeProduto}>Jack Daniels Fire 1L</Text>
           <Text style={estilos.preco}>R$ 159,90</Text>
           <Text style={estilos.descricao}>
            Proibido a venda para menores de 18 anos
           </Text>
          </View>
        </View>

        <View style={estilos.divProduto}>
          <Image style={estilos.imagemProduto} source={RedLabel} />
          <View>
            <Text style={estilos.nomeProduto}>RedLabel 1L</Text>
            <Text style={estilos.preco}>R$ 105,90</Text>
            <Text style={estilos.descricao}>
              Proibido a venda para menores de 18 anos
            </Text>
          </View>
        </View>

        <View style={estilos.divProduto}>
          <Image style={estilos.imagemProduto} source={Ballantines} />
          <View>
            <Text style={estilos.nomeProduto}>Ballantines 1L</Text>
            <Text style={estilos.preco}>R$ 89,90</Text>
            <Text style={estilos.descricao}>
              Proibido a venda para menores de 18 anos
            </Text>
          </View>
        </View>

        <View style={estilos.divProduto}>
          <Image style={estilos.imagemProduto} source={Royal} />
          <View>
            <Text style={estilos.nomeProduto}>Royal Salute 700Ml</Text>
            <Text style={estilos.preco}>R$ 749,90</Text>
            <Text style={estilos.descricao}>
              Proibido a venda para menores de 18 anos
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 26,
    width: "100%",
    textAlign: "center",
    color: "white",
    position: "absolute",
    padding: 16,
  },

  titulocarrinho: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontFamily: "MontserratBold",
  },

  carrinho: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  nomefazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontFamily: "MontserratBold",
  },

  imagemFazenda: {
    width: 82,
    height: 52,
  },

  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },

  descricao: {
    color: "#a3a3a3",
    fontStyle: "italic",
  },

  preco: {
    fontSize: 26,
    lineHeight: 42,
    color: "#2a9f85",
    marginTop: 8,
  },

  imagemProduto: {
    width: 92,
    height: 92,
  },

  nomeProduto: {
    fontSize: 18,
    lineHeight: 26,
  },

  divProduto: {
    flexDirection: 'row',
    marginTop: 25
  }
});
