import React from 'react';

import { Switch, Route } from 'react-router-dom';

import All from '../../unit/all';
import Ongoing from '../../unit/ongoing';
import Complete from '../../unit/complete';

import './index.css';

const Body = () => {
	return (
		<div className='body'>
			<Switch>
				<Route path='/' exact component={All} />
				<Route path='/ongoing' exact component={Ongoing} />
				<Route path='/complete' exact component={Complete} />
			</Switch>
		</div>
	);
}

export default Body;
