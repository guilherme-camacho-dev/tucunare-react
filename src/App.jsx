import { useEffect, useState } from 'react';

import Cabecalho from './components/Cabecalho';
import PainelConteudo from './components/PainelConteudo';
import Rodape from './components/Rodape';

function App() {
  const [listaItens, setListaItens] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const dadosSalvos = localStorage.getItem('tucunare_dados');

    if (dadosSalvos) {
      setListaItens(JSON.parse(dadosSalvos));
    }

    setCarregado(true);
  }, []);

  useEffect(() => {
    if (carregado) {
      localStorage.setItem(
        'tucunare_dados',
        JSON.stringify(listaItens)
      );
    }
  }, [listaItens, carregado]);

  function handleAdicionar(item) {
    setListaItens((itensAtuais) => [...itensAtuais, item]);
  }

  function handleRemover(id) {
    setListaItens((itensAtuais) =>
      itensAtuais.filter((item) => item.id !== id)
    );
  }

  return (
    <div className="app">
      <Cabecalho titulo="Central de Conteúdo" />

      <PainelConteudo
        itens={listaItens}
        onAdicionar={handleAdicionar}
        onRemover={handleRemover}
      />

      <Rodape />
    </div>
  );
}

export default App;