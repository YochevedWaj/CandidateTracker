import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CandidatesContext = createContext();

const CandidatesContextComponent = ({ children }) => {
    const [pendingCount, setPendingCount] = useState(0);
    const [confirmedCount, setConfirmedCount] = useState(0);
    const [refusedCount, setRefusedCount] = useState(0);

    const updateStatusCounts = async () => {
        const { data } = await axios.get(`/api/candidates/getstatuscount`);
        setPendingCount(data.pendingCount);
        setConfirmedCount(data.confirmedCount);
        setRefusedCount(data.refusedCount);
    }

    useEffect(updateStatusCounts, []);

    return (
        <CandidatesContext.Provider value={{ pendingCount, confirmedCount, refusedCount, updateStatusCounts }}>
            {children}
        </CandidatesContext.Provider>
    )
}

const useCandidatesCount = () => {
    return useContext(CandidatesContext);
}

export { CandidatesContextComponent, useCandidatesCount };