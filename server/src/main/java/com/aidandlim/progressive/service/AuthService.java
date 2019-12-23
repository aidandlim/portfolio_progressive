package com.aidandlim.progressive.service;

import com.aidandlim.progressive.dao.UserDao;
import com.aidandlim.progressive.dto.Response;
import com.aidandlim.progressive.dto.User;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Service
public class AuthService {

    @Autowired
    SqlSession sqlSession;

    @Autowired
    UserDao userDao;

    @Transactional
    public User check(HttpServletRequest request) {
        try {
            HttpSession session = request.getSession();
            Long userId = session.getAttribute("userId") == null ? -1 : (Long) session.getAttribute("userId");
            if(userId == -1) {
                return null;
            } else {
                userDao = sqlSession.getMapper(UserDao.class);
                User result = userDao.select(new User(userId));
                return result;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Transactional
    public Response signin(HttpServletRequest request, User user) {
        try {
            userDao = sqlSession.getMapper(UserDao.class);
            User result = userDao.selectWithEmailAndPassword(user);
            if(result == null) {
                return new Response(4);
            } else {
                HttpSession session = request.getSession();
                session.setAttribute("userId", result.getId());
                session.setAttribute("companyId", result.getCompany());
                return new Response(7);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(4);
        }
    }

    @Transactional
    public Response signup(User user) {
        try {
            userDao = sqlSession.getMapper(UserDao.class);
            userDao.insert(user);
            return new Response(7);
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(4);
        }
    }

    @Transactional
    public void signout(HttpServletRequest request) {
        try {
            HttpSession session = request.getSession();
            session.invalidate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
