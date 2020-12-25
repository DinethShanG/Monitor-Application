package com.weatherdata.api.filter;

import com.weatherdata.api.users.User;

public class HumidityAlert extends Alert {
    public HumidityAlert() {
        super.setThresholdValue(85);
    }


    @Override
    public String createMessage(double dataValue, double thresholdValue, User user) {
        String Message = " Hi "+user.getUsername()+", Current Humidity Value: "+dataValue+"% . Threshold Humidity Value: "+thresholdValue+"% ,Humidity value has Exceeded !!!";
        return Message;
    }
}
