import Jack from "../../assets/jack.png";
import RedLabel from "../../assets/RedLabel.png";
import Ballantines from "../../assets/Ballantines.png";
import Royal from "../../assets/Royal.png";
import chivas from "../../assets/chivas.png";

const produto = {
    topo: {
        titulo: "Detalhes do Carrinho",
    },
    produtos: {
        nome: "Escola da revoada",
        descricao: "Whiskys:",
        descricao2: "Produtos 100% origianis com o melhor preço",
        preco: "R$ 40,00",
        botao: "Comprar",
    },
    itens: {
      titulo: "Itens do Carrinho",
      lista: [
        {
          nome: "Jack",
          imagem: Jack,
        },
        {
          nome: "RedLabel",
          imagem: RedLabel,
        },
        {
          nome: "Ballantines",
          imagem: Ballantines,
        },
        {
          nome: "Royal",
          imagem: Royal,
        },
        {
          nome: "chivas",
          imagem: chivas,
        }
      ]
    }
  }

export default produto;