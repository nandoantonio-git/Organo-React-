import { useState } from 'react';
import Banner from './components/Banner';
import Forms from './components/Forms';
import Time from './components/Time';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';


function App() {


  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Front-end',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Back-end',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'UX & Design',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DevOps',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    }

  ]);

  const inicial = [
    {
      nome: 'Fernando Antonio',
      cargo: 'undefined',
      imagem: 'https://github.com/nandoantonio-git.png',
      time: times[1].nome,
      id:uuidv4(),
      favorito: false
    },
    {
      nome: 'Fernando Antonio',
      cargo: 'undefined',
      imagem: 'https://github.com/nandoantonio-git.png',
      time: times[2].nome,
      id:uuidv4(),
      favorito: false
    },
    {
      nome: 'Fernando Antonio',
      cargo: 'undefined',
      imagem: 'https://github.com/nandoantonio-git.png',
      time: times[3].nome,
      id:uuidv4(),
      favorito: false
    },
    {
      nome: 'Fernando Antonio',
      cargo: 'undefined',
      imagem: 'https://github.com/nandoantonio-git.png',
      time: times[4].nome,
      id:uuidv4(),
      favorito: false
    }
  ];

  const [colaboradores, setColaboradores] = useState(inicial);

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));}
  
  const aoNovoColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }


  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime(novoTime){
    setTimes([...times, {...novoTime, id:uuidv4()}])
  }

  function resolverFavorito(id){
    setColaboradores(colaboradores.map( colaborador => {
      if(colaborador.id === id)colaborador.favorito = !colaborador.favorito;
      return colaborador;}
    ))
  }

  return (
    <div className="App">
      <Banner />
      <Forms 
      cadastrarTime={cadastrarTime}
      times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador)} />
      {times.map(time => <Time
        nome={time.nome}
        key={time.nome}
        time={time}
        mudarCor={mudarCorDoTime}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
        aoFavoritar={resolverFavorito}
      />)}
      <Footer />
    </div>

  );
}


export default App;
