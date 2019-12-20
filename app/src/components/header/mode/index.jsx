import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ui_isCardMode } from '../../../actions';

const Mode = () => {
    const ui = useSelector(state => state.ui);
    const dispatch = useDispatch();

    const _handleCardMode = () => {
		dispatch(ui_isCardMode(!ui.isCardMode));
    }
    
    return (
        <div className='header-mode' onClick={_handleCardMode}>
            <div className='header-mode-description'>카드 모드</div>
            <div className={ui.isCardMode ? 'header-mode-toggle-box-active' : 'header-mode-toggle-box'}>
                <div className={ui.isCardMode ? 'header-mode-toggle-button-active' : 'header-mode-toggle-button'}></div>
            </div>
        </div>
    );
}

export default Mode;