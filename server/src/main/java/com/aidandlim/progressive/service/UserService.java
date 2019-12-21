package com.aidandlim.progressive.service;

import com.aidandlim.progressive.dao.UserDao;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    SqlSession sqlSession;

    @Autowired
    UserDao userDao;

}
