import React from 'react';
import { Route } from 'react-router';
import Layout from './Layout';
import Home from './Pages/Home';
import AddCandidate from './Pages/AddCandidate';
import Pending from './Pages/Pending';
import Confirmed from './Pages/Confirmed';
import Refused from './Pages/Refused';
import ViewDetails from './Pages/ViewDetails';
import { CandidatesContextComponent } from './CandidatesContext';

export default function App() {
    return (
        <CandidatesContextComponent>
            <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/addcandidate' component={AddCandidate} />
                <Route exact path='/pending' component={Pending} />
                <Route exact path='/confirmed' component={Confirmed} />
                <Route exact path='/refused' component={Refused} />
                <Route exact path='/pending/details/:candidateId' component={ViewDetails} />
            </Layout>
        </CandidatesContextComponent>
    )
}
