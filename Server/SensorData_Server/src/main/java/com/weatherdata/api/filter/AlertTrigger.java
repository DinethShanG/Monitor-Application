package com.weatherdata.api.filter;

public class AlertTrigger {
    private double thresholdValue;

    public AlertTrigger(double thresholdValue) {
        this.thresholdValue = thresholdValue;
    }

    public boolean isExceeded(double value){

        if (value>thresholdValue)
            return true;
        else
            return false;
    }
}
