package com.aidandlim.progressive.api;

import com.aidandlim.progressive.dto.Progress;
import com.aidandlim.progressive.dto.Project;
import com.aidandlim.progressive.dto.Response;
import com.aidandlim.progressive.service.ProgressService;
import com.aidandlim.progressive.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;

@RestController
public class ProgressAPI {

    @Autowired
    ProgressService service;

    @RequestMapping(value = "/api/progresses", method = RequestMethod.GET)
    public ArrayList<Progress> getProjects(HttpServletRequest request, @RequestParam("project") long project) {
        return service.getProgresses(project);
    }

    @RequestMapping(value = "/api/progress", method = RequestMethod.POST)
    public Response postProject(HttpServletRequest request, @RequestBody Progress progress) {
        return service.postProgresses(request, progress);
    }

    @RequestMapping(value = "/api/progress", method = RequestMethod.DELETE)
    public Response deleteProject(HttpServletRequest request, @RequestParam("id") long id) {
        return service.deleteProgress(id);
    }

}
