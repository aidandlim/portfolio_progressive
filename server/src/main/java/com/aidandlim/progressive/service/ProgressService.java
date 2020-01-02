package com.aidandlim.progressive.service;

import com.aidandlim.progressive.dao.ProgressDao;
import com.aidandlim.progressive.dto.Progress;
import com.aidandlim.progressive.dto.Response;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;

@Service
public class ProgressService {

    @Autowired
    SqlSession sqlSession;

    @Autowired
    ProgressDao progressDao;

    @Transactional
    public ArrayList<Progress> getProgresses(long project) {
        try {
            progressDao = sqlSession.getMapper(ProgressDao.class);
            ArrayList<Progress> result = progressDao.selectAll(project);
            return result;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Transactional
    public Response postProgresses(HttpServletRequest request, Progress progress) {
        try {
            HttpSession session = request.getSession();
            progress.setUser((Long) session.getAttribute("userId"));
            progressDao = sqlSession.getMapper(ProgressDao.class);
            progressDao.insert(progress);
            return new Response(7);
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(4);
        }
    }

    @Transactional
    public Response deleteProgress(long id) {
        try {
            Progress progress = new Progress();
            progress.setId(id);

            progressDao = sqlSession.getMapper(ProgressDao.class);
            progressDao.delete(progress);
            return new Response(7);
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(4);
        }
    }

}
