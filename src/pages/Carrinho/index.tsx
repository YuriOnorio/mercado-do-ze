import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";
import topo from "../../../assets/topo.png";
import logo from "../../../assets/logo.png";
import saque from "../../../assets/saque.png";
import jack from "../../../assets/jack.png";
import RedLabel from "../../../assets/RedLabel.png";
import Ballantines from "../../../assets/Ballantines.png";
import Royal from "../../../assets/Royal.png";
import chivas from "../../../assets/chivas.png";
import GranVinho from "../../../assets/GranVinho.png";

const width = Dimensions.get("screen").width;

export default function Carrinho() {
  return (
    <>
      <View style={estilos.corFundo}>
        <Image source={topo} style={estilos.topo} />
        <Text style={estilos.titulo}>Faculdade Beer</Text>

        <View style={estilos.carrinho}>
          <Text style={estilos.titulocarrinho}>Whiskys:</Text>

          <Text style={estilos.descricao}>
            Produtos 100% origianis com o melhor preço
          </Text>

          <View style={estilos.divProduto}>
            <Image style={estilos.imagemProduto} source={chivas} />
            <View style={estilos.separaca}>
              <Text style={estilos.nomeProduto}>
                Chivas 18 anos 750Ml
              </Text>
              <Text style={estilos.preco}>R$ 519,90</Text>
              <Text style={estilos.descricao}>
                Proibido para menores de 18 anos
              </Text>
            </View>
          </View>

          <View style={estilos.divProduto}>
            <Image style={estilos.imagemProduto} source={jack} />
            <View style={estilos.separaca}>
              <Text style={estilos.nomeProduto}>Jack Daniels Fire 1L</Text>
              <Text style={estilos.preco}>R$ 159,90</Text>
              <Text style={estilos.descricao}>
                Proibido para menores de 18 anos
              </Text>
            </View>
          </View>

          <View style={estilos.divProduto}>
            <Image style={estilos.imagemProduto} source={RedLabel} />
            <View style={estilos.separaca}>
              <Text style={estilos.nomeProduto}>RedLabel 1L</Text>
              <Text style={estilos.preco}>R$ 105,90</Text>
              <Text style={estilos.descricao}>
                Proibidopara menores de 18 anos
              </Text>
            </View>
          </View>

          <View style={estilos.divProduto}>
            <Image style={estilos.imagemProduto} source={Ballantines} />
            <View style={estilos.separaca}>
              <Text style={estilos.nomeProduto}>Ballantines 1L</Text>
              <Text style={estilos.preco}>R$ 89,90</Text>
              <Text style={estilos.descricao}>
                Proibido para menores de 18 anos
              </Text>
            </View>
          </View>

          <View style={estilos.divProduto}>
            <Image style={estilos.imagemProduto} source={Royal} />
            <View style={estilos.separaca}>
              <Text style={estilos.nomeProduto}>Royal Salute 700Ml</Text>
              <Text style={estilos.preco}>R$ 749,90</Text>
              <Text style={estilos.descricao}>
                Proibido para menores de 18 anos
              </Text>
            </View>
          </View>

          <View style={estilos.colorCerveja}>
          <Text style={estilos.titulocarrinho}>Vinhos:</Text>
          </View>

          <View style={estilos.divProduto}>
            <Image style={estilos.imagemProduto} source={GranVinho} />
            <View style={estilos.separaca}>
              <Text style={estilos.nomeProduto}>Royal Salute 700Ml</Text>
              <Text style={estilos.preco}>R$ 749,90</Text>
              <Text style={estilos.descricao}>
                Proibido para menores de 18 anos
              </Text>
            </View>
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
    fontSize: 28,
    lineHeight: 52,
    color: "#464646",
    textAlign: "center",
  },

  carrinho: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  nomefazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
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
    textAlign: "center",
  },

  preco: {
    fontSize: 26,
    lineHeight: 42,
    color: "#2a9f85",
    marginTop: 8,
  },

  imagemProduto: {
    width: 100,
    height: 120,
  },

  nomeProduto: {
    fontSize: 18,
    lineHeight: 26,
  },

  divProduto: {
    flexDirection: "row",
    marginTop: 25,
    backgroundColor: "#f9f9f9",
  },

  corFundo: {
    backgroundColor: "#F1F0F0",
  },

  separaca: {
    marginLeft: 12
  },

  
  doces: {
    fontSize: 26,
    lineHeight: 42,
    color: "#151515",
    //textShadowColor: 'rgba(0, 0, 0, 0.5)', // Cor da sombra
    //textShadowOffset: { width: 3, height: 3 }, // Deslocamento da sombra (horizontal e vertical)
    //textShadowRadius: 8, // Raio da sombra (desfoque)
    textAlign: "center"
  },

  colorCerveja: {
    backgroundColor: '#f9f9f9',
    marginTop: 30
  }
});
