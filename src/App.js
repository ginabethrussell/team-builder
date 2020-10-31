import React, {useState} from 'react';
import './App.css';
import TeamList from './components/TeamList';
import Form from './components/Form';
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
  const [memberToEdit, setMemberToEdit] = useState({});

  const addTeamMember = (teamMember) => {
    setTeamMembers([...teamMembers, teamMember]);
  };
  const selectMemberToEdit = (member) => {
    setMemberToEdit(member);
  };
  const editTeamMember = (teamMember) => {
    teamMembers.map(member => {
      if(member.key === teamMember.key){
        member.name = teamMember.name;
        member.email = teamMember.email;
        member.role =  teamMember.role;
        }
      }
    )   
    };

  console.log(memberToEdit);

  return (
    <div className="App">
      <h1>Russell Web Development Team</h1>
      <TeamList teamMembers={teamMembers} selectMemberToEdit={selectMemberToEdit}/> 
      <Form addTeamMember={addTeamMember} memberToEdit={memberToEdit} editTeamMember={editTeamMember}/>
    </div>
  );
}

export default App;
