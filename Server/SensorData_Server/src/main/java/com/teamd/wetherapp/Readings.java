package com.teamd.wetherapp;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="WetherData")
public class Readings {


    private String id;
    private int Sid;
    private double value;
    //private Date date;


    public Readings(int Sid, double value) {
        this.Sid = Sid;
        this.value = value;
    }

    public int getSid() {
        return Sid;
    }


    public double getValue() {
        return value;
    }


    //check how to take current date time and sort usinhg that
}


