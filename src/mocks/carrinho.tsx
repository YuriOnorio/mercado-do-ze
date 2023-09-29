import jack from "../../../../assets/jack.png";
import RedLabel from "../../../../assets/RedLabel.png";
import Ballantines from "../../../../assets/Ballantines.png";
import Royal from "../../../../assets/Royal.png";
import chivas from "../../../../assets/chivas.png";

const carrinho = {
    topo: {
        titulo: "Detalhes do Carrinho",
    },
    detalhes: {
        nome: "Carrinho de Compras",
        nomeFazenda: "Etec Cidade do Livro",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazendo direto para a sua cozinha.",
        preco: "R$ 40,00",
        botao: "Comprar",
    },
    itens: {
      titulo: "Itens do Carrinho",
      lista: [
        {
          nome: "Jack",
          imagem: jack,
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

export default carrinho;