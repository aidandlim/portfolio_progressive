import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ui_isCardMode } from '../../../actions';

import './index.css';

const Mode = () => {
    const ui = useSelector(state => state.ui);
    const dispatch = useDispatch();

    const _handleCardMode = () => {
		dispatch(ui_isCardMode(!ui.isCardMode));
    }
    
    return (
        <div className='mode' onClick={_handleCardMode}>
            <div className='mode-description'>카드 모드</div>
            <div className={ui.isCardMode ? 'mode-toggle-box-active' : 'mode-toggle-box'}>
                <div className={ui.isCardMode ? 'mode-toggle-button-active' : 'mode-toggle-button'}></div>
            </div>
        </div>
    );
}

export default Mode;