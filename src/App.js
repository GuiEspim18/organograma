import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import Teams from './components/Teams';

const App = () => {

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-end',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'Ux e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Inovação e gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }
  ];

  const socialMedia = [
    {
      name: "facebook",
      src: "/images/fb.png"
    },
    {
      name: "twitter",
      src: "/images/tw.png"
    },
    {
      name: "instagram",
      src: "/images/ig.png"
    }
  ];

  const [register, setRegister] = useState([])

  const onRegister = (value) => {
    setRegister([...register, value])
  }

  return (
    <div>
      <Banner />
      <Form onRegister={value => onRegister(value)} teams={teams.map(team => team.name)} />
      {teams.map(team =>
        <Teams
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          collaborators={register.filter(collaborator => collaborator.team === team.name)}
        />)}
      <Footer socialMedia={socialMedia} />
    </div>
  );
}


export default App;
