package com.aidandlim.progressive.api;

import com.aidandlim.progressive.dto.Project;
import com.aidandlim.progressive.dto.Response;
import com.aidandlim.progressive.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;

@RestController
public class ProjectAPI {

    @Autowired
    ProjectService service;

    @RequestMapping(value = "/api/project", method = RequestMethod.GET)
    public Project getProject(HttpServletRequest request, @RequestBody Project project) {
        return service.getProject(project);
    }

    @RequestMapping(value = "/api/projects", method = RequestMethod.GET)
    public ArrayList<Project> getProjects(HttpServletRequest request, @RequestParam("isCompleted") int isCompleted) {
        return service.getProjects(request, isCompleted);
    }

    @RequestMapping(value = "/api/project", method = RequestMethod.POST)
    public Response postProject(HttpServletRequest request, @RequestBody Project project) {
        return service.postProject(request, project);
    }

    @RequestMapping(value = "/api/project", method = RequestMethod.PUT)
    public Response putProject(HttpServletRequest request, @RequestBody Project project) {
        return service.putProject(project);
    }

    @RequestMapping(value = "/api/project/isCompleted", method = RequestMethod.PUT)
    public Response putProjectIsCompleted(HttpServletRequest request, @RequestBody Project project) {
        return service.putProjectIsCompleted(project);
    }

    @RequestMapping(value = "/api/project", method = RequestMethod.DELETE)
    public Response deleteProject(HttpServletRequest request, @RequestBody Project project) {
        return service.deleteProject(project);
    }

    @RequestMapping(value = "/api/projects", method = RequestMethod.DELETE)
    public Response deleteProjects(HttpServletRequest request, @RequestBody ArrayList<Project> project) {
        return service.deleteProjects(project);
    }

}
