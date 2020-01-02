import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { user_data } from '../../actions';

import { BrowserRouter as Router } from 'react-router-dom';

import { check } from '../axios';

import Wrapper from 'react-div-100vh';

import Landing from '../landing';
import Sidebar from '../sidebar';
import Header from '../header';
import Body from '../body';

import './index.css';

const App = () => {
	const user = useSelector(state => state.user);
	const dispatch = useDispatch();

	const color = '#01579B';
	const sizeOfNav = '12.5rem';
	const sizeOfHeader = '2.5rem';

	useEffect(() => {
		check((res) => {
			if(res === 0) {
				alert('서버가 구동되고 있지 않습니다. 잠시 후 다시 시도해주십시오.');
			} else {
				dispatch(user_data(res));
			}
		});
	}, [dispatch]);

	return (
		<Router>
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
						--color-15: ${color + '26'};
						--color-10: ${color + '1a'};
					}
				`}</style>
				{ user.data.id === undefined ? <Landing /> : null }
				{ user.data.id !== undefined ? <Sidebar /> : null }
				{ user.data.id !== undefined ? <Header /> : null }
				{ user.data.id !== undefined ? <Body /> : null }
			</Wrapper>
		</Router>
	);
}

export default App;
