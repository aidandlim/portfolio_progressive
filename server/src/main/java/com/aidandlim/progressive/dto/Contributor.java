package com.aidandlim.progressive.dto;

public class Contributor extends Response {
    private long id;
    private long project;
    private long user;
    private int type;

    public Contributor() {
        super();
    }

    public Contributor(long id, long project, long user, int type) {
        this.id = id;
        this.project = project;
        this.user = user;
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

    public long getUser() {
        return user;
    }

    public void setUser(long user) {
        this.user = user;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }
}
