import { useState } from 'react';

function PainelConteudo({ itens, onAdicionar, onRemover }) {
  const [textoInput, setTextoInput] = useState('');
  const [busca, setBusca] = useState('');

  function adicionarItem() {
    if (textoInput.trim() === '') {
      alert('Por favor, digite algum conteúdo!');
      return;
    }

    const novoId = Math.floor(Math.random() * 10000);
    const notaImportancia = Math.round(Math.random() * 5);

    const novoItem = {
      id: novoId,
      titulo: textoInput,
      nota: notaImportancia
    };

    onAdicionar(novoItem);
    setTextoInput('');
  }

  const itensFiltrados = itens.filter((item) =>
    item.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <main className="painel">
      <h2>Painel Principal</h2>

      <div className="formulario">
        <input
          type="text"
          value={textoInput}
          onChange={(e) => setTextoInput(e.target.value)}
          placeholder="Digite um novo item..."
        />

        <button onClick={adicionarItem}>
          Adicionar
        </button>
      </div>

      <div className="busca">
        <label>Buscar conteúdo:</label>

        <input
          type="text"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Digite para pesquisar..."
        />
      </div>

      <h3>
        Itens Cadastrados ({itensFiltrados.length})
      </h3>

      {itensFiltrados.length === 0 ? (
        <p>Nenhum conteúdo encontrado.</p>
      ) : (
        <ul className="lista">
          {itensFiltrados.map((item) => (
            <li key={item.id}>
              <span>
                <strong>{item.titulo}</strong>
                {' '} (Relevância: {item.nota}/5)
              </span>

              <button
                className="botao-excluir"
                onClick={() => onRemover(item.id)}
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default PainelConteudo;