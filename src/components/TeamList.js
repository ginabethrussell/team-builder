import React from 'react';

export default function TeamList(props) {
    const {teamMembers, selectMemberToEdit} = props;

console.log(teamMembers);
const editTeamMember = (member) => {
    selectMemberToEdit(member);
};
    return (  
        teamMembers.map( member => (
            <div className='teamMember'>
                <h3>{member.name}</h3>
                <p>{member.email}</p>
                <p>{member.role}</p>
                <button onClick={() => editTeamMember(member)}>Edit</button>
            </div>
            )
        )
    )
}