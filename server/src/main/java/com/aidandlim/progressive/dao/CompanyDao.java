package com.aidandlim.progressive.dao;

import com.aidandlim.progressive.dto.Company;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface CompanyDao {

    ArrayList<Company> selectAll();

}
