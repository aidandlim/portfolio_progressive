package com.aidandlim.progressive.api;

import com.aidandlim.progressive.dto.Response;
import com.aidandlim.progressive.dto.User;
import com.aidandlim.progressive.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class AuthAPI {

    @Autowired
    AuthService service;

    @RequestMapping(value = "/api/auth", method = RequestMethod.GET)
    public User check(HttpServletRequest request) {
        return service.check(request);
    }

    @RequestMapping(value = "/api/auth/in", method = RequestMethod.POST)
    public Response signin(HttpServletRequest request, @RequestBody User user) {
        return service.signin(request, user);
    }

    @RequestMapping(value = "/api/auth/up", method = RequestMethod.POST)
    public Response signup(@RequestBody User user) {
        return service.signup(user);
    }

}
