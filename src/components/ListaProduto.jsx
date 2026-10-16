import CardProduto from './CardProduto';

function ListaProduto() {

  const livros = [
  {
    id: 1,
    nome: 'O Hobbit',
    autor: 'J. R. R. Tolkien',
    preco: '49,90',
    imagem: '/img/hobbit.jpg'
  },
  {
    id: 2,
    nome: '1984',
    autor: 'George Orwell',
    preco: '39,90',
    imagem: '/img/1984.jpg'
  },
  {
    id: 3,
    nome: 'Dom Casmurro',
    autor: 'Machado de Assis',
    preco: '29,90',
    imagem: '/img/dom-casmurro.jpg'
  },
  {
    id: 4,
    nome: 'O Pequeno Príncipe',
    autor: 'Antoine de Saint-Exupéry',
    preco: '34,90',
    imagem: '/img/pequeno-principe.jpg'
  },
  {
    id: 5,
    nome: 'A Revolução dos Bichos',
    autor: 'George Orwell',
    preco: '32,90',
    imagem: '/img/revolucao-bichos.jpg'
  },
  {
    id: 6,
    nome: 'Código Limpo',
    autor: 'Robert C. Martin',
    preco: '89,90',
    imagem: '/img/codigo-limpo.jpg'
  }
];

  return (
    <section id="produtos">

      <h2>Nossos Livros</h2>

      <div className="lista-produtos">

        {livros.map((livro) => (

          <CardProduto
            key={livro.id}
            nome={livro.nome}
            autor={livro.autor}
            imagem={livro.imagem}
            preco={livro.preco}
          />

        ))}

      </div>

    </section>
  );
}

export default ListaProduto;