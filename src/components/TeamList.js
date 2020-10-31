import React from 'react';

export default function TeamList(props) {
    const {teamMembers} = props;
console.log(teamMembers);
    return (  
        teamMembers.map( member => (
            <div className='teamMember'>
                <h3>{member.name}</h3>
                <p>{member.email}</p>
                <p>{member.role}</p>
            </div>
            )
        )
    )
}