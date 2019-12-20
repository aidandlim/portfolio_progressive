package com.aidandlim.progressive.service;

import com.aidandlim.progressive.dao.CompanyDao;
import com.aidandlim.progressive.dto.Company;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Service
public class CompanyService {

    @Autowired
    SqlSession sqlSession;

    @Autowired
    CompanyDao companyDao;

    @Transactional
    public ArrayList<Company> getCompanies() {
        try {
            companyDao = sqlSession.getMapper(CompanyDao.class);
            ArrayList<Company> result = companyDao.selectAll();
            return result;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

}
