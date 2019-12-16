import React from 'react';

import Ongoing from '../ongoing';
import Complete from '../complete';

import './index.css';

const All = () => {
	return (
		<div className='all'>
			<Ongoing />
			<Complete />
		</div>
	);
}

export default All;
