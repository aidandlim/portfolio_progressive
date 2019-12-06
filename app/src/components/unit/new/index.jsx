import React from 'react';

import './index.css';

const New = () => {
	const _handleNewProject = () => {
		document.querySelector('.new').style.display = 'none';
	}

	return (
		<div className='new' onClick={ () => _handleNewProject() }>new</div>
	);
}

export default New;
