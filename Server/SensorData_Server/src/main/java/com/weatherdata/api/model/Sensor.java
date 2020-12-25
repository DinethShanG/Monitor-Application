package com.weatherdata.api.model;



import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "sensor")
public class Sensor {

    @Id private String id;
    private String sensorId;
    private String date;
    private String time;
    private String value;
    private double thresholdValue;
    private boolean exceeded;

    public Sensor(String sensorId, String date, String time, String value, double thresholdValue, boolean exceeded) {
        this.sensorId = sensorId;
        this.date = date;
        this.time = time;
        this.value = value;
        this.thresholdValue = thresholdValue;
        this.exceeded = exceeded;
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
