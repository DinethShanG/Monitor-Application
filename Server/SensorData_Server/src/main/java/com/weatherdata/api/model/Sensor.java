package com.weatherdata.api.model;



import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "sensor")
public class Sensor {

    @Id private String id;
    private String sensorId;
    private String timestamp;
    private String value;
    private double thresholdValue;
    private boolean exceeded;//remove

    public Sensor(String sensorId, String timestamp, String value, double thresholdValue, boolean exceeded) {
        this.sensorId = sensorId;
        this.timestamp = timestamp;
        this.value = value;
        this.thresholdValue = thresholdValue;
        this.exceeded = exceeded;
    }

    public String getId() {
        return id;
    }

    public String getSensorId() {
        return sensorId;
    }

    public String getTimestamp() {
        return timestamp;
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
