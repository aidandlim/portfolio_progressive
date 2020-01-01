package com.aidandlim.progressive.service;

import com.aidandlim.progressive.dao.ProjectDao;
import com.aidandlim.progressive.dto.Project;
import com.aidandlim.progressive.dto.Response;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

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

    @Transactional
    public ArrayList<Project> getProjects(Project project) {
        try {
            projectDao = sqlSession.getMapper(ProjectDao.class);
            ArrayList<Project> result = projectDao.selectAll(project);
            return result;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Transactional
    public Response postProject(Project project) {
        try {
            projectDao = sqlSession.getMapper(ProjectDao.class);
            projectDao.insert(project);
            return new Response(7);
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(4);
        }
    }

    @Transactional
    public Response putProject(Project project) {
        try {
            projectDao = sqlSession.getMapper(ProjectDao.class);
            projectDao.update(project);
            return new Response(7);
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(4);
        }
    }

    @Transactional
    public Response putProjectIsCompleted(Project project) {
        try {
            projectDao = sqlSession.getMapper(ProjectDao.class);
            projectDao.updateIsCompleted(project);
            return new Response(7);
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(4);
        }
    }

    @Transactional
    public Response deleteProject(Project project) {
        try {
            projectDao = sqlSession.getMapper(ProjectDao.class);
            projectDao.delete(project);
            return new Response(7);
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(4);
        }
    }

    @Transactional
    public Response deleteProjects(ArrayList<Project> project) {
        try {
            projectDao = sqlSession.getMapper(ProjectDao.class);
            for(int i = 0; i < project.size(); i++) {
                projectDao.delete(project.get(i));
            }
            return new Response(7);
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(4);
        }
    }

}
