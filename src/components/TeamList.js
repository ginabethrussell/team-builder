import React from 'react';
import {
    Card,CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

export default function TeamList(props) {
    const {teamMembers, selectMemberToEdit} = props;

const editTeamMember = (member) => {
    selectMemberToEdit(member);
};
    return (  
        <div className="team">
            {
            teamMembers.map( member => (
                <Card key={member.id} className='teamMember'>
                    <CardBody>
                        <CardText>
                            <CardTitle>{member.name}</CardTitle>
                            <CardText>{member.email}</CardText>
                            <CardText>{member.role}</CardText>
                        </CardText>
                    <Button color='warning' onClick={() => editTeamMember(member)}>Edit</Button>
                    </CardBody>
                </Card>
                )
            )
            }           
        </div>
    )
}