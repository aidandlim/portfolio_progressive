package com.aidandlim.progressive.dto;

public class Progress extends Response {

    private long id;

    private long project;
    private String projectCode;
    private String projectName;

    private long user;
    private String userName;

    private String content;
    private String time;
    private int type;

    public Progress() {
        super();
    }

    public Progress(long id, long project, String projectCode, String projectName, long user, String userName, String content, String time, int type) {
        this.id = id;
        this.project = project;
        this.projectCode = projectCode;
        this.projectName = projectName;
        this.user = user;
        this.userName = userName;
        this.content = content;
        this.time = time;
        this.type = type;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getProject() {
        return project;
    }

    public void setProject(long project) {
        this.project = project;
    }

    public String getProjectCode() {
        return projectCode;
    }

    public void setProjectCode(String projectCode) {
        this.projectCode = projectCode;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public long getUser() {
        return user;
    }

    public void setUser(long user) {
        this.user = user;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }
}
