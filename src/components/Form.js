import React, {useState, useEffect} from 'react';

export default function Form(props){
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
            <form onSubmit={submitForm}>
                <label htmlFor='name'>Name</label>
                <input 
                type='text'
                id='name'
                placeholder='enter name'
                name='name'
                value={teamMember.name}
                onChange={handleChanges}
                required
                />
                <br />
                <label htmlFor='email'>Email</label>
                <input 
                type='email'
                id='email'
                placeholder='enter email'
                name='email'
                value={teamMember.email}
                onChange={handleChanges}
                required
                />
                <br />
                <label htmlFor='role'>Role</label>
                <input 
                type='text'
                id='role'
                placeholder='enter role'
                name='role'
                value={teamMember.role}
                onChange={handleChanges}
                required
                />
                <br />
                <button type='submit'>
                {
                    !memberToEdit? 'Add Team Member': 'Edit Team Member'
                }
                    </button>
            </form>
        </div>
    )  
}