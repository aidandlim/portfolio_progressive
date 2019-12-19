package com.aidandlim.template_springboot.api;

import com.aidandlim.template_springboot.service.ExampleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class API {

    @Autowired
    ExampleService service;

    @RequestMapping("/api/")
    public boolean example() { return (service.example()); }

}
