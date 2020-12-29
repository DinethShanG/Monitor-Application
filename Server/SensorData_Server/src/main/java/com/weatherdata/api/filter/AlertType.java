package com.weatherdata.api.filter;

import com.weatherdata.api.users.User;

import java.io.IOException;
import java.net.URISyntaxException;

public interface AlertType {
    boolean isExceeded(boolean exceeded,double dataValue) throws IOException, URISyntaxException;
    String createMessage(double dataValue, double thresholdValue, User user);
    double getThreshold();
}
