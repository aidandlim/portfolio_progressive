package com.aidandlim.progressive.dao;

import com.aidandlim.progressive.dto.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface ContributorDao {

    ArrayList<User> selectAll(long project, int type);
    void insert(long project, long user, int type);

}
