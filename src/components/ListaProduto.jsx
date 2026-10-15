import CardProduto from './CardProduto';

function ListaProduto() {

  const livros = [
    {
      id: 1,
      nome: 'O Hobbit',
      preco: '49,90',
      imagem: 'https://placehold.co/300x420?text=O+Hobbit'
    },
    {
      id: 2,
      nome: '1984',
      preco: '39,90',
      imagem: 'https://placehold.co/300x420?text=1984'
    },
    {
      id: 3,
      nome: 'Dom Casmurro',
      preco: '29,90',
      imagem: 'https://placehold.co/300x420?text=Dom+Casmurro'
    },
    {
      id: 4,
      nome: 'O Pequeno Príncipe',
      preco: '34,90',
      imagem: 'https://placehold.co/300x420?text=Pequeno+Principe'
    },
    {
      id: 5,
      nome: 'A Revolução dos Bichos',
      preco: '32,90',
      imagem: 'https://placehold.co/300x420?text=Revolucao+dos+Bichos'
    },
    {
      id: 6,
      nome: 'Código Limpo',
      preco: '89,90',
      imagem: 'https://placehold.co/300x420?text=Codigo+Limpo'
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
            imagem={livro.imagem}
            preco={livro.preco}
          />

        ))}

      </div>

    </section>
  );
}

export default ListaProduto;