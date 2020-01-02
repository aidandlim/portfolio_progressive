import React from 'react';

import { useDispatch } from 'react-redux';
import { ui_nav } from '../../../actions';

import { Link } from 'react-router-dom';

import { deleteProject } from '../../axios';

import { FiSearch, FiEdit3, FiTrash2 } from 'react-icons/fi';

const Table = ({ projects, setProjects }) => {
    const dispatch = useDispatch();

    const _handleDetail = () => {
		dispatch(ui_nav(12));
	}

	const _handleModify = () => {
		alert('데모 버전에 포함되지 않은 기능입니다.');
	}

	const _handleDelete = (id) => {
		if(window.confirm('해당 프로젝트를 삭제하시겠습니까?')) {
			deleteProject(id, (res) => {
				if(res.status === 7) {
					const index = projects.findIndex((project) => project.id === id);
					if(index !== -1) {
						let result = [...projects];
						result.splice(index, 1);
						setProjects(result);
					}
				}
			});
		}
    }
    
    return (
        <div className='body-table'>
            <div className='body-table-header'>
                <div style={{ width: '5%' }}>선택</div>
                <div style={{ width: '25%' }}>코드</div>
                <div style={{ width: '25%' }}>프로젝트명</div>
                <div style={{ width: '10%' }}>관리자</div>
                <div style={{ width: '10%' }}>담당자</div>
                <div style={{ width: '25%' }}>설정</div>
            </div>
            {
                projects.length === 0 
                ? <div className='body-table-body'>프로젝트가 존재하지 않습니다.</div>
                : projects.map((project, index) => 
                    <div className='body-table-body' key={index}>
                        <div style={{ width: '5%' }}><input type='checkbox' /></div>
                        <div style={{ width: '25%' }}>{project.code}</div>
                        <div style={{ width: '25%' }}>{project.name}</div>
                        <div style={{ width: '10%' }}>
                            {project.managers.length === 0 ? '-' : null}
                            {project.managers.length === 1 ? project.managers[0].name : null}
                            {project.managers.length === 2 ? `${project.managers[0].name} 등` : null}
                        </div>
                        <div style={{ width: '10%' }}>
                            {project.clients.length === 0 ? '-' : null}
                            {project.clients.length === 1 ? project.clients[0].name : null}
                            {project.clients.length === 2 ? `${project.clients[0].name} 등` : null}
                        </div>
                        <div style={{ width: '25%' }}>
                            <div className='body-table-button-container'>
                                <Link onClick={_handleDetail} to={`/detail?pid=${project.id}`}><FiSearch className='body-table-button-detail'/></Link>
                                <Link onClick={_handleModify} to={`/modify?pid=${project.id}`}><FiEdit3 className='body-table-button-modify'/></Link>
                                <FiTrash2 className='body-table-button-delete' onClick={ () => _handleDelete(project.id) } />
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Table;