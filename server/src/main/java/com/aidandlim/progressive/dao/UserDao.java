package com.aidandlim.progressive.dao;

import com.aidandlim.progressive.dto.Company;
import com.aidandlim.progressive.dto.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface UserDao {

    User select(User user);
    ArrayList<User> selectAll(Company company);
    void insert(User user);
    void update(User user);
    void delete(User user);

}
