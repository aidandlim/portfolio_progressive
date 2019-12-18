import React, { useState } from 'react';

import './index.css';

const Ongoing = () => {
	const [isCardMode, setIsCardMode] = useState(false);

	const _handleCardMode = () => {
		console.log(`Ongoing => _handleCardMode()`);
		setIsCardMode(!isCardMode);
	}

	return (
		<div className='ongoing'>
			<div className='body-header'>
				<div>진행 중인 프로젝트</div>
				<div className='body-format' onClick={_handleCardMode}>
					<div className='body-format-description'>카드 모드</div>
					<div className={isCardMode ? 'body-format-toggle-box-active' : 'body-format-toggle-box'}>
						<div className={isCardMode ? 'body-format-toggle-button-active' : 'body-format-toggle-button'}></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Ongoing;
