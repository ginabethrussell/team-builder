import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText
   } from 'reactstrap';

export default function TeamForm(props){
    const {addTeamMember, editTeamMember, memberToEdit} = props;

    const [teamMember, setTeamMember] = useState(
        {
            name: '',
            email: '',
            role: ''
        });
   
    useEffect(()=> {
        setTeamMember(memberToEdit);
    },[memberToEdit]);
    
    const handleChanges = (event) => {
        setTeamMember({...teamMember, [event.target.name]: event.target.value});
    };

    const submitForm = (event) => {
        event.preventDefault();
       
        if (memberToEdit){
            editTeamMember(teamMember);
        }else{
            addTeamMember(teamMember);
        }
        
        setTeamMember({
            name: '',
            email: '',
            role: ''
        })
    };

    return (
        <div className='form'>
            <Form onSubmit={submitForm}>
                <FormGroup>
                    <Label htmlFor='name'>Name</Label>
                    <Input 
                    type='text'
                    id='name'
                    placeholder='enter name'
                    name='name'
                    value={teamMember.name}
                    onChange={handleChanges}
                    required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='email'>Email</Label>
                    <Input 
                    type='email'
                    id='email'
                    placeholder='enter email'
                    name='email'
                    value={teamMember.email}
                    onChange={handleChanges}
                    required
                    />
               </FormGroup>
               <FormGroup>
                    <Label htmlFor='role'>Role</Label>
                    <Input 
                    type='text'
                    id='role'
                    placeholder='enter role'
                    name='role'
                    value={teamMember.role}
                    onChange={handleChanges}
                    required
                    />
                </FormGroup>
                <Button  type='submit'>
                {
                    !memberToEdit? 'Add Team Member': 'Edit Team Member'
                }
                </Button>
            </Form>
        </div>
    )  
}