package com.aidandlim.progressive.api;

import com.aidandlim.progressive.dto.Response;
import com.aidandlim.progressive.dto.User;
import com.aidandlim.progressive.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthAPI {

    @Autowired
    UserService service;

    @RequestMapping(value = "/api/auth", method = RequestMethod.POST)
    public Response signup(@RequestBody User user) {
        return service.postUsers(user);
    }

}
