import { useState } from 'react';
import Banner from './components/Banner';
import Forms from './components/Forms';
import Time from './components/Time';
import Footer from './components/Footer';

function App() {
  const [colaboradores, setColaborador] = useState([]);

  const aoNovoColaboradorCadastrado = (colaborador) => {
    setColaborador([...colaboradores, colaborador])
  }

  const times = [
    {
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Back-end',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'UX & Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'DevOps',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }

  ]
 
  return (
    <div className="App">
      <Banner />
      <Forms times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador)} />
      {times.map(time => <Time
        nome={time.nome}
        key={time.nome}
        corDeFundo={time.corSecundaria}
        corDestaque={time.corPrimaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Footer/>
    </div>
    
  );
}


export default App;
