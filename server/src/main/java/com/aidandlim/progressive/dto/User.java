package com.aidandlim.progressive.dto;

public class User extends Response {
    private long id;
    private String email;
    private String password;
    private String name;

    private long company;
    private String companyName;

    private String department;
    private String position;
    private int auth;

    public User() {
        super();
    }

    public User(long id) {
        this.id = id;
    }

    public User(long id, String email, String password, String name, long company, String companyName, String department, String position, int auth) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.company = company;
        this.companyName = companyName;
        this.department = department;
        this.position = position;
        this.auth = auth;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public int getAuth() {
        return auth;
    }

    public void setAuth(int auth) {
        this.auth = auth;
    }
}
