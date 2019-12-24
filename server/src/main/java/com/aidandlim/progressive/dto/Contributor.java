package com.aidandlim.progressive.dto;

public class Contributor extends Response {
    private long id;
    private long projectId;
    private long userId;
    private int type;

    public Contributor() {
        super();
    }

    public Contributor(long id, long projectId, long userId, int type) {
        this.id = id;
        this.projectId = projectId;
        this.userId = userId;
        this.type = type;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getProjectId() {
        return projectId;
    }

    public void setProjectId(long projectId) {
        this.projectId = projectId;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }
}
