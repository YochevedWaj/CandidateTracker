import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PendingRow from '../components/PendingRow';

const Pending = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const getCandidates = async () => {
            const { data } = await axios.get('/api/candidates/Get?status=pending');
            setCandidates(data);
        }
        getCandidates();
        console.log(candidates);
    }, [])

    return (
        <div className='container'>
            <div>

                <table className='table table-hover table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>View Details</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidates.map(c => <PendingRow candidate={c} />)}
                    </tbody>
                </table>
            </div>
        </div>
        )
}
export default Pending;