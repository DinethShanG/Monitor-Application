package com.weatherdata.api.filter;

public class AlertTriggerFactory {
    public AlertType getAlertType(String sensorId){
        if(sensorId.equals("1")){
            return new TemperatureAlert();
        }
        else if(sensorId.equals("2")){
            return new HumidityAlert();
        }
        else {
            return new PressureAlert();
        }
    }
}
