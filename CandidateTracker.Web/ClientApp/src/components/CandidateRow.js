import React from 'react';

const CandidateRow = ({ candidate, showNotes }) => {
    const { id, firstName, lastName, number, email, notes } = candidate;
    return (
        <tr key={id}>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{number}</td>
            <td>{email}</td>
            {showNotes && <td>{notes}</td>}
        </tr>
        )
}

export default CandidateRow;