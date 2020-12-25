package com.weatherdata.api.alertsender;

import com.weatherdata.api.users.User;

import java.io.IOException;
import java.net.URISyntaxException;

public class AlertNotifierFactory {
    public void sendAlert(User user,String message) throws IOException, URISyntaxException {
        if(user.getMethod().equals("email")){
            new MailAlertNotifier().sendAlert(user,message);
        }
        else if(user.getMethod().equals("voice")){
            new VoiceAlertNotifier().sendAlert(user,message);
        }
        else {
            new SmsAlertNotifier().sendAlert(user,message);
        }
    }
}
