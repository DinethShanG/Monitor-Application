package com.weatherdata.api.filter;

import com.weatherdata.api.users.User;

public class PressureAlert extends Alert {
    public PressureAlert() {
        super.setThresholdValue(1);
    }

    @Override
    public String createMessage(double dataValue, double thresholdValue, User user) {
        String Message = " Hi "+user.getUsername()+", Current Pressure Value is: "+dataValue+" ATM. Threshold Temperature Value is: "+thresholdValue+" ATM, Therefore, Pressure value has Exceeded !!!";
        return Message;
    }
}
