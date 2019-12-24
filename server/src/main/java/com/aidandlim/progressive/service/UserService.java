package com.aidandlim.progressive.service;

import com.aidandlim.progressive.dao.UserDao;
import com.aidandlim.progressive.dto.Company;
import com.aidandlim.progressive.dto.User;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;

@Service
public class UserService {

    @Autowired
    SqlSession sqlSession;

    @Autowired
    UserDao userDao;

    @Transactional
    public ArrayList<User> getUsers(HttpServletRequest request) {
        try {
            HttpSession session = request.getSession();
            userDao = sqlSession.getMapper(UserDao.class);
            ArrayList<User> result = userDao.selectAll(new Company((Long) session.getAttribute("companyId")));
            return result;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

}
