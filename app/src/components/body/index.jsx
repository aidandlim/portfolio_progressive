import React from 'react';

import { Switch, Route } from 'react-router-dom';

import All from './all';
import Ongoing from './ongoing';
import Complete from './complete';
import Setting from './setting';

import Project from './project';
import Progress from './progress';
import Detail from './detail';

import Error from './error';

import './index.css';

const Body = () => {
	return (
		<div className='body'>
			<Switch>
				<Route path='/' exact component={All} />
				<Route path='/ongoing' exact component={Ongoing} />
				<Route path='/complete' exact component={Complete} />
				<Route path='/setting' exact component={Setting} />
				<Route path='/project' exact component={Project} />
				<Route path='/progress' exact component={Progress} />
				<Route path='/detail' exact component={Detail} />
				<Route path='/' component={Error} />
			</Switch>
		</div>
	);
}

export default Body;
