package com.aidandlim.progressive.api;

import com.aidandlim.progressive.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserAPI {

    @Autowired
    UserService service;

}
