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
          nome: "Tomate",
          imagem: tomate,
        },
        {
          nome: "Brócolis",
          imagem: brocolis,
        },
        {
          nome: "Batata",
          imagem: batata,
        },
        {
          nome: "Pepino",
          imagem: pepino,
        },
        {
          nome: "Abóbora",
          imagem: abobora,
        }
      ]
    }
  }

export default carrinho;