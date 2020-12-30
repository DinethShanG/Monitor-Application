package com.weatherdata.api.filter;

import com.weatherdata.api.users.User;

import java.io.IOException;
import java.net.URISyntaxException;

public interface AlertType {
    void triggerAlert(String dataValue,String thresholdValue) throws IOException, URISyntaxException;
    String createMessage(String dataValue, String thresholdValue, User user);
}
