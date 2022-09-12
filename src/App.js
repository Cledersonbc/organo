import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondColor: '#D9F7E9'
    },
    {
      name: 'Front-end',
      primaryColor: '#B2CFFA',
      secondColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondColor: '#F0F8E2'
    },
    {
      name: 'DevOps',
      primaryColor: '#E06B69',
      secondColor: '#FDE7E8'
    },
    {
      name: 'UX & Design',
      primaryColor: '#DB6EBF',
      secondColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondColor: '#FFEEDF'
    }
  ];


  const [workers, setWorkers] = useState([]);

  const newWorkerAdded = (worker) => {
    setWorkers([...workers, worker]);
  }

  return (
    <div className="App">
      <Banner />
      <Form onSavedWorker={newWorkerAdded} teamNames={teams.map(team => team.name)} />
      {
        teams.map((team) => {
          return <Team key={team.name}
            name={team.name}
            primaryColor={team.primaryColor}
            secondColor={team.secondColor}
            teamNames={teams.map(team => team.name)}
            workers={workers.filter(worker => worker.team === team.name)}
          />
        })
      }
      <Footer />
    </div>
  );
}

export default App;
