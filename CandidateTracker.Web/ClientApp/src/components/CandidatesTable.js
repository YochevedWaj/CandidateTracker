import React, { useState } from 'react';
import CandidateRow from './CandidateRow';

const CandidatesTable = ({ candidates }) => {
    
    const [showNotes, setShowNotes] = useState(true);
    return (
        <div>
            <button className='btn btn-success' onClick={() => setShowNotes(!showNotes)}>Toggle Notes</button>
        <table className='table table-hover table-bordered table-striped'>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    {showNotes && <th>Notes</th>}
                </tr>
                </thead>
                <tbody>
                    {candidates.map(c => <CandidateRow candidate={c} showNotes={showNotes}/>)}
                </tbody>
            </table>
        </div>
        )
}

export default CandidatesTable;