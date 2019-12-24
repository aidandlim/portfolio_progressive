package com.aidandlim.progressive.service;

import com.aidandlim.progressive.dao.ProjectDao;
import com.aidandlim.progressive.dto.Project;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProjectService {

    @Autowired
    SqlSession sqlSession;

    @Autowired
    ProjectDao projectDao;

    @Transactional
    public Project getProject(Project project) {
        try {
            projectDao = sqlSession.getMapper(ProjectDao.class);
            Project result = projectDao.select(project);
            return result;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

}
