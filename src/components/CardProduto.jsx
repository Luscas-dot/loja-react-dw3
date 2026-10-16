function CardProduto({ nome, autor, imagem, preco }) {
  return (
    <div className="card-produto">
      <img src={imagem} alt={`Capa do livro ${nome}`} />

      <h3>{nome}</h3>

      <p className="autor">{autor}</p>

      <p className="preco">R$ {preco}</p>

      <button>Comprar</button>
    </div>
  );
}

export default CardProduto;