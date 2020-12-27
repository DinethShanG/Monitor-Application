package com.weatherdata.api.model;



import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "sensor")
public class Sensor {

    @Id private String id;
    private String sensorType;
    private String date;
    private String time;
    private String location;
    private String value;
    private double thresholdValue;
    private boolean exceeded;

    public Sensor(String sensorType, String date, String time, String location, String value, double thresholdValue, boolean exceeded) {
        this.sensorType = sensorType;
        this.date = date;
        this.time = time;
        this.location = location;
        this.value = value;
        this.thresholdValue = thresholdValue;
        this.exceeded = exceeded;
    }

    public String getId() {
        return id;
    }

    public String getSensorType() {
        return sensorType;
    }

    public String getDate() {
        return date;
    }

    public String getTime() {
        return time;
    }

    public String getLocation() {
        return location;
    }

    public String getValue() {
        return value;
    }

    public double getThresholdValue() {
        return thresholdValue;
    }

    public boolean isExceeded() {
        return exceeded;
    }
}
