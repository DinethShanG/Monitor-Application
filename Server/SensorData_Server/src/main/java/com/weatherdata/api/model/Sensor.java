package com.weatherdata.api.model;



import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "sensor")
public class Sensor {

    @Id private String id;
    private int sensorId;
    private String date;
    private String time;
    private double dataValue;
    private String threshold;
    private String exceeded;

    public Sensor(int sensorId, String date, String time, double dataValue,String threshold, String exceeded) {
        this.sensorId = sensorId;
        this.date = date;
        this.time = time;
        this.dataValue = dataValue;
        this.threshold = threshold;
        this.exceeded = exceeded;
    }

    public int getSensorId() {
        return sensorId;
    }

    public String getDate() {
        return date;
    }

    public String getTime() {
        return time;
    }

    public double getDataValue() {
        return dataValue;
    }

    public String getThreshold() {
        return threshold;
    }

    public String getExceeded() {
        return exceeded;
    }
}
