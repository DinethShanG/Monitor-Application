package com.weatherdata.api.alertsender;

import com.weatherdata.api.users.User;

import java.io.IOException;
import java.net.URISyntaxException;

public interface AlertNotifier {
    void sendAlert(User user, String message) throws IOException, URISyntaxException;
}
