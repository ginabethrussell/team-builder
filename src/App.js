import React, {useState} from 'react';
import './App.css';
import TeamList from './components/TeamList';

const team = [
  {
    name: "Matthew Russell",
    email: 'mbr4477@gmail.com',
    role: 'Senior Engineer'
  },
  {
    name: "Gina Russell",
    email: 'grussell@gmail.com',
    role: 'Junior Engineer'
    }, 
    {
    name: "Nathan Russell",
    email: 'ndr4477@gmail.com',
    role: 'Business Manager'
    }
];

function App() {
  const [teamMembers, setTeamMembers] = useState(team);
  console.log(teamMembers);

  return (
    <div className="App">
      <h1>Russell Web Development Team</h1>
      <TeamList teamMembers={teamMembers}/> 
    </div>
  );
}

export default App;
