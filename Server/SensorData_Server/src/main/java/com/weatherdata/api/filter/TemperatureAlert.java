package com.weatherdata.api.filter;

import com.weatherdata.api.users.User;

public class TemperatureAlert extends Alert {

    @Override
    public String createMessage(String dataValue, String thresholdValue, User user) {
        String Message = " Hi , "+user.getUsername()+": Current Temperature Value: "+dataValue+" Celsius . Threshold Temperature Value: "+thresholdValue+" Celsius ,  Therefore ,Temperature value has Exceeded !!!";
        return Message;
    }
}
