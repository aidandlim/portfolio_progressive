package com.aidandlim.progressive.dao;

import com.aidandlim.progressive.dto.Progress;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface ProgressDao {

    ArrayList<Progress> selectAll(long project);
    void insert(Progress progress);
    void delete(Progress progress);

}
