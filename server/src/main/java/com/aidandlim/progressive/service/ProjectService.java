package com.aidandlim.progressive.service;

import com.aidandlim.progressive.dao.ContributorDao;
import com.aidandlim.progressive.dao.ProjectDao;
import com.aidandlim.progressive.dto.Project;
import com.aidandlim.progressive.dto.Response;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;

@Service
public class ProjectService {

    @Autowired
    SqlSession sqlSession;

    @Autowired
    ProjectDao projectDao;

    @Autowired
    ContributorDao contributorDao;

    @Transactional
    public Project getProject(long project) {
        try {
            projectDao = sqlSession.getMapper(ProjectDao.class);
            Project result = projectDao.select(project);

            contributorDao = sqlSession.getMapper(ContributorDao.class);
            result.setManagers(contributorDao.selectAll(project, 0));
            result.setClients(contributorDao.selectAll(project, 1));

            return result;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Transactional
    public ArrayList<Project> getProjects(HttpServletRequest request, int isCompleted) {
        try {
            HttpSession session = request.getSession();
            Project project = new Project();
            project.setCompany((Long) session.getAttribute("companyId"));
            project.setIsCompleted(isCompleted);

            projectDao = sqlSession.getMapper(ProjectDao.class);
            ArrayList<Project> result = projectDao.selectAll(project);

            contributorDao = sqlSession.getMapper(ContributorDao.class);
            for(int i = 0; i < result.size(); i++) {
                result.get(i).setManagers(contributorDao.selectAll(result.get(i).getId(), 0));
                result.get(i).setClients(contributorDao.selectAll(result.get(i).getId(), 1));
            }

            return result;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Transactional
    public ArrayList<Project> getProjectsByUserId(HttpServletRequest request, int type) {
        try {
            HttpSession session = request.getSession();
            long user = (Long) session.getAttribute("userId");

            projectDao = sqlSession.getMapper(ProjectDao.class);
            ArrayList<Project> result = projectDao.selectAllByUserId(user, type);

            return result;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Transactional
    public Response postProject(HttpServletRequest request, Project project) {
        try {
            HttpSession session = request.getSession();
            project.setCompany((Long) session.getAttribute("companyId"));

            projectDao = sqlSession.getMapper(ProjectDao.class);
            projectDao.insert(project);

            contributorDao = sqlSession.getMapper(ContributorDao.class);
            for(int i = 0; i < project.getManagers().size(); i++) {
                contributorDao.insert(project.getId(), project.getManagers().get(i).getId(), 0);
            }
            for(int i = 0; i < project.getClients().size(); i++) {
                contributorDao.insert(project.getId(), project.getClients().get(i).getId(), 1);
            }

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
    public Response deleteProject(long id) {
        try {
            Project project = new Project();
            project.setId(id);

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
