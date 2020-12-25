package com.weatherdata.api.filter;

import com.weatherdata.api.alertsender.AlertNotifierFactory;
import com.weatherdata.api.alertsender.RecipientRetriever;
import com.weatherdata.api.users.User;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;

public abstract class Alert implements AlertType {
    private double thresholdValue;
    private List<User> userList;
    private String message;
    @Override
    public double getThreshold() {
        return this.thresholdValue;
    }

    @Override
    public boolean isExceeded(double dataValue) throws IOException, URISyntaxException {
        if(thresholdValue < dataValue){
            userList = new RecipientRetriever().getAllUsers();
            for (User user: userList) {
                message = createMessage(dataValue,thresholdValue,user);
                new AlertNotifierFactory().sendAlert(user,message);
            }
            return true;
        }
        else{
            return false;
        }
    }

    public double getThresholdValue() {
        return thresholdValue;
    }

    public void setThresholdValue(double thresholdValue) {
        this.thresholdValue = thresholdValue;
    }
}
