import React from 'react';

import './index.css';

const New = () => {
	const _handleNewProject = () => {
		document.querySelector('.new').style.display = 'none';
	}

	return (
		<div className='new' onClick={ () => _handleNewProject() }>
			<div className='body-title-primary'>
				신규 프로젝트 생성
				<div className='body-exit'>닫기</div>
			</div>
			<div className='body-body'>Content will be here.</div>
		</div>
	);
}

export default New;
