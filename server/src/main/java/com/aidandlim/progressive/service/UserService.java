package com.aidandlim.progressive.service;

import com.aidandlim.progressive.dao.UserDao;
import com.aidandlim.progressive.dto.Response;
import com.aidandlim.progressive.dto.User;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    @Autowired
    SqlSession sqlSession;

    @Autowired
    UserDao userDao;

    @Transactional
    public Response postUsers(User user) {
        try {
            userDao = sqlSession.getMapper(UserDao.class);
            userDao.insert(user);
            return new Response(7);
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(4);
        }
    }

}
