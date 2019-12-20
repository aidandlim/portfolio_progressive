import React, { useState } from 'react';

import In from './in';
import Up from './up';
import Fp from './fp';
import Nav from './nav';

import './index.css';

const Landing = () => {
    const [ landingStatus, setLandingStatus ] = useState(0);

    return (
        <div className='landing'>
            <div className='landing-container'>
                <h1>#PROGRESSIVE</h1>
                { landingStatus === 0 ? <In /> : null }
                { landingStatus === 1 ? <Up /> : null }
                { landingStatus === 2 ? <Fp /> : null }
                <Nav setLandingStatus={setLandingStatus}/>
            </div>
        </div>
    );
}

export default Landing;