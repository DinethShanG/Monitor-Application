package com.weatherdata.api.model;



import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "sensor")
public class Sensor {

    private String id;
    private String sensorId;
    private String date;
    private String time;
    private String dataValue;
    private String location;
    private String threshold;
    private String exceeded;


    public Sensor(String sensorId, String date, String time, String dataValue, String location, String threshold, String exceeded) {
        this.sensorId = sensorId;
        this.date = date;
        this.time = time;
        this.dataValue = dataValue;
        this.location = location;
        this.threshold = threshold;
        this.exceeded = exceeded;
    }

    public String getId() {
        return id;
    }

    public String getSensorId() {
        return sensorId;
    }

    public String getDate() {
        return date;
    }

    public String getTime() {
        return time;
    }

    public String getDataValue() {
        return dataValue;
    }

    public String getLocation() {
        return location;
    }

    public String getThreshold() {
        return threshold;
    }

    public String getExceeded() {
        return exceeded;
    }
}
