import React from "react";
import { StyleSheet, TextInput, Image, Text, View } from "react-native";

import jack from "../../../../assets/jack.png";
import RedLabel from "../../../../assets/RedLabel.png";
import Ballantines from "../../../../assets/Ballantines.png";
import Royal from "../../../../assets/Royal.png";
import chivas from "../../../../assets/chivas.png";

type Props= {
  nome: string,
  descricao: string,
  descricao2: string;
}


export default function Produto ({nome, descricao, descricao2}: Props) {
    return <>

<Text style={estilos.titulo}>{nome}</Text>
        <View style={estilos.carrinho}>
          <Text style={estilos.titulocarrinho}>{descricao}</Text>

          <Text style={estilos.descricao}>{descricao2}</Text>

          <View style={estilos.pesquisa}>
          
            <TextInput style={estilos.inputpesquisa}
              placeholder="Pesquisar..."/>
          </View>

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

        </View>
    </>
}

const estilos = StyleSheet.create({

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
      borderRadius: 5,
    },
  
    corFundo: {
      backgroundColor: "#F1F0F0",
    },
  
    separaca: {
      marginLeft: 12
    },
  
    colorCerveja: {
      backgroundColor: '#f9f9f9',
      marginTop: 30
    },
  
    pesquisa: {
      backgroundColor: '#cccccc',
      borderRadius: 5,
      height: 30
    },
  
    inputpesquisa: {
      left: 10,
      fontSize: 20
    }
  });
  