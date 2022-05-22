import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CandidatesTable from '../components/CandidatesTable';

const Refused = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const getCandidates = async () => {
            const { data } = await axios.get('/api/candidates/Get?status=refused');
            setCandidates(data);
        }
        getCandidates();
        console.log(candidates);
    }, [])
    return (
        <div className='container'>
            <CandidatesTable candidates={candidates} />
        </div>
    )
}
export default Refused;