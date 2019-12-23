package com.aidandlim.progressive.api;

import com.aidandlim.progressive.dto.User;
import com.aidandlim.progressive.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;

@RestController
public class UserAPI {

    @Autowired
    UserService service;

    @RequestMapping(value = "/api/users", method = RequestMethod.GET)
    public ArrayList<User> getUsers(HttpServletRequest request) {
        return service.getUsers(request);
    }

}
