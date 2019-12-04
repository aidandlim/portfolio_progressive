package com.aidandlim.template_springboot.service;

import com.aidandlim.template_springboot.dao.ExampleDao;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ExampleService {

    @Autowired
    SqlSession sqlSession;

    @Autowired
    ExampleDao exampleDao;

    @Transactional
    public boolean example() {
        return true;
    }

}
