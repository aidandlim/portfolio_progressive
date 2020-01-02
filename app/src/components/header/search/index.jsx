import React from 'react';

import './index.css';

const Search = () => {
	const _handleSearch = (event) => {
		alert('데모 버전에 포함되지 않은 기능입니다.');
		event.target.value = '';
	}

	return (
		<input className='search' placeholder='Search ...' onChange={_handleSearch} />
	);
}

export default Search;
