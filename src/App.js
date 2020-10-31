import React, {useState} from 'react';
import './App.css';
import TeamList from './components/TeamList';
import Form from './components/Form';
const team = [
  {
    id: 1,
    name: "Matthew Russell",
    email: 'mbr4477@gmail.com',
    role: 'Senior Engineer'
  },
  {
    id: 2,
    name: "Gina Russell",
    email: 'grussell@gmail.com',
    role: 'Junior Engineer'
  }, 
  {
    id: 3,
    name: "Nathan Russell",
    email: 'ndr4477@gmail.com',
    role: 'Business Manager'
  }
];

function App() {
  const [teamMembers, setTeamMembers] = useState(team);
  const [memberToEdit, setMemberToEdit] = useState('');

  const addTeamMember = (teamMember) => {
    console.log(teamMember);
    teamMember.id = Date.now();
    setTeamMembers([...teamMembers, teamMember]);
  };

  const selectMemberToEdit = (member) => {
    setMemberToEdit(member);
  };

  const editTeamMember = (teamMember) => {
   
    const currentTeamMembers = [...teamMembers];
    const newTeamList = currentTeamMembers.map(member => {
      if(member.id === teamMember.id){
        member.name = teamMember.name;
        member.email = teamMember.email;
        member.role =  teamMember.role;
        }
        return member;
      });
    setTeamMembers(newTeamList);
    setMemberToEdit('');
    };

  return (
    <div className="App">
      <h1>Russell Web Development Team</h1>
      <TeamList teamMembers={teamMembers} selectMemberToEdit={selectMemberToEdit}/> 
      <Form addTeamMember={addTeamMember} editTeamMember={editTeamMember} memberToEdit={memberToEdit} />
    </div>
  );
}

export default App;
