package com.aidandlim.progressive.dto;

import java.util.ArrayList;

public class Project extends Response {
    private long id;
    private String code;
    private String name;
    private long company;
    private String info1;
    private String info2;
    private String info3;
    private String info4;
    private String info5;
    private int isCompleted;

    private ArrayList<User> managers;
    private ArrayList<User> clients;

    public Project() {
        super();
    }

    public Project(long id, String code, String name, long company, String info1, String info2, String info3, String info4, String info5, int isCompleted, ArrayList<User> managers, ArrayList<User> clients) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.company = company;
        this.info1 = info1;
        this.info2 = info2;
        this.info3 = info3;
        this.info4 = info4;
        this.info5 = info5;
        this.isCompleted = isCompleted;
        this.managers = managers;
        this.clients = clients;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getCompany() {
        return company;
    }

    public void setCompany(long company) {
        this.company = company;
    }

    public String getInfo1() {
        return info1;
    }

    public void setInfo1(String info1) {
        this.info1 = info1;
    }

    public String getInfo2() {
        return info2;
    }

    public void setInfo2(String info2) {
        this.info2 = info2;
    }

    public String getInfo3() {
        return info3;
    }

    public void setInfo3(String info3) {
        this.info3 = info3;
    }

    public String getInfo4() {
        return info4;
    }

    public void setInfo4(String info4) {
        this.info4 = info4;
    }

    public String getInfo5() {
        return info5;
    }

    public void setInfo5(String info5) {
        this.info5 = info5;
    }

    public int getIsCompleted() {
        return isCompleted;
    }

    public void setIsCompleted(int isCompleted) {
        this.isCompleted = isCompleted;
    }

    public ArrayList<User> getManagers() {
        return managers;
    }

    public void setManagers(ArrayList<User> managers) {
        this.managers = managers;
    }

    public ArrayList<User> getClients() {
        return clients;
    }

    public void setClients(ArrayList<User> clients) {
        this.clients = clients;
    }
}
