package com.aidandlim.progressive.dao;

import com.aidandlim.progressive.dto.Project;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface ProjectDao {

    Project select(long project);
    ArrayList<Project> selectAll(Project project);
    ArrayList<Project> selectAllByUserId(long user, int type);
    void insert(Project project);
    void update(Project project);
    void updateIsCompleted(Project project);
    void delete(Project project);

}
