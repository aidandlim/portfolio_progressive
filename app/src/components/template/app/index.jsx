import React from 'react';

import Nav from '../nav';
import Header from '../header';
import Body from '../body';

import Wrapper from 'react-div-100vh';

import './index.css';

const App = () => {
	const color = '#2c3e50';
	const sizeOfNav = '12.5rem';
	const sizeOfHeader = '2.5rem';

	return (
		<Wrapper className='app no-drag'>
			<style>{`
				:root {
					--size-nav: ${sizeOfNav};
					--size-header: ${sizeOfHeader};
					--color-100: ${color + 'ff'};
					--color-90: ${color + 'e6'};
					--color-80: ${color + 'cc'};
					--color-70: ${color + 'b3'};
					--color-60: ${color + '99'};
					--color-50: ${color + '80'};
					--color-40: ${color + '66'};
					--color-30: ${color + '4d'};
					--color-20: ${color + '33'};
					--color-10: ${color + '1a'};
				}
			`}</style>
			<Nav />
			<Header />
			<Body />
		</Wrapper>
	);
}

export default App;
