package com.aidandlim.progressive.dao;

import org.springframework.stereotype.Repository;

@Repository
public interface ContributorDao {

    void insert(long project, long user, int type);

}
