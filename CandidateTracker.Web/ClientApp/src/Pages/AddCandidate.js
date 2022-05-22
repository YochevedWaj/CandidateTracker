import React, { useState } from 'react';
import axios from 'axios';
import { produce } from 'immer';
import { useHistory } from 'react-router-dom';
import { useCandidatesCount } from '../CandidatesContext';

const AddCandidate = () => {
    const [candidate, setCandidate] = useState({});
    const history = useHistory();

    const onTextChange = e => {
        const newCandidate = produce(candidate, draft => {
            draft[e.target.name] = e.target.value;
        });
        setCandidate(newCandidate)
    }

    const { updateStatusCounts } = useCandidatesCount();

    const onSubmitClick = async (e) => {
        e.preventDefault();
        await axios.post('/api/candidates/AddCandidate', candidate);
        updateStatusCounts();
        history.push('/');
    }
    const { firstName, lastName, email, number, notes } = candidate;
    return (
        <div className='container'>
            <div className='col-md-6 offset-md-3'>
                <div className='card card-body bg-light'>
                    <form onSubmit={onSubmitClick}>
                        <input type='text' value={firstName} onChange={onTextChange} placeholder='First Name' name='firstName' className='form-control' />
                        <br />
                        <input type='text' value={lastName} onChange={onTextChange} placeholder='Last Name' name='lastName' className='form-control' />
                        <br />
                        <input type='text' value={email} onChange={onTextChange} placeholder='Email' name='email' className='form-control' />
                        <br />
                        <input type='text' value={number} onChange={onTextChange} placeholder='Phone Number' name='number' className='form-control' />
                        <br />
                        <textarea rows='5' value={notes} onChange={onTextChange} className='form-control' name='notes'></textarea>
                        <button className='btn btn-success'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddCandidate;