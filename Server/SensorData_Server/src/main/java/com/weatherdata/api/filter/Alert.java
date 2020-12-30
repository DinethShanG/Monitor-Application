package com.weatherdata.api.filter;

import com.weatherdata.api.alertsender.AlertNotifierFactory;
import com.weatherdata.api.alertsender.RecipientRetriever;
import com.weatherdata.api.users.User;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;

public abstract class Alert implements AlertType {
    private List<User> userList;
    private String message;

    @Override
    public void triggerAlert(String dataValue, String thresholdValue) throws IOException, URISyntaxException {
        userList = new RecipientRetriever().getAllUsers();
        for (User user : userList) {
            message = createMessage(dataValue, thresholdValue, user);
            new AlertNotifierFactory().sendAlert(user, message);
        }

    }
}
