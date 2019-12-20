package com.aidandlim.progressive.api;

import com.aidandlim.progressive.dto.Company;
import com.aidandlim.progressive.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class CompanyAPI {

    @Autowired
    CompanyService service;

    @RequestMapping(value = "/api/companies", method = RequestMethod.GET)
    public ArrayList<Company> getCompanies() {
        return service.getCompanies();
    }

}
