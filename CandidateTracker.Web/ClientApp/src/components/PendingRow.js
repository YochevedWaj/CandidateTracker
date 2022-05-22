import React from 'react';
import { Link } from 'react-router-dom';

const PendingRow = ({ candidate }) => {
    const { id, firstName, lastName, number, email } = candidate;
    return (
        <tr key={id}>
            <td>
                <Link to={`/pending/details/${id}`}>View Details</Link>
            </td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{number}</td>
            <td>{email}</td>
        </tr>
        )
}

export default PendingRow;