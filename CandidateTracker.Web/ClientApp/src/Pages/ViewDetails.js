import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useCandidatesCount } from '../CandidatesContext';

const ViewDetails = () => {
    const [candidate, setCandidate] = useState({});
    const [isPending, setIsPending] = useState(false);
    const { candidateId } = useParams();

    useEffect(() => {
        const getCandidate = async () => {
            const { data } = await axios.get(`/api/candidates/getbyid?id=${candidateId}`);
            setCandidate(data);
            setIsPending(data.registrationStatus === 'Pending');
        }
        getCandidate();
     
    }, [candidateId, isPending])

    const { id, firstName, lastName, email, number, notes, registrationStatus } = candidate;
    const { updateStatusCounts } = useCandidatesCount();

    const onStatusChangeClick = async (e) => {
        await axios.post('/api/candidates/setstatus', { id, Status: e.target.name });
        setIsPending(false);
        updateStatusCounts();
    }
    
    return (
        <div className='col-md-6 offset-md-3'>
            <div className='card card-body bg-light'>
                <h4>Name: {firstName} {lastName}</h4>
                <h4>Email: {email}</h4>
                <h4>Phone: {number}</h4>
                <h4>Status: {registrationStatus}</h4>
                <h4>Notes:</h4>
                <p>{notes}</p>
                {isPending && <div className='row'>
                    <div className='col-md-3'>
                        <button name='confirmed' className='btn btn-primary' onClick={onStatusChangeClick} >Confirmed</button>
                    </div>
                    <div className='col-md-3'>
                        <button name='refused' className='btn btn-danger' onClick={onStatusChangeClick} >Refused</button>
                    </div>
                </div>}
            </div>
        </div>
        )
}

export default ViewDetails;

