package com.weatherdata.api.alertsender;

import com.weatherdata.api.services.SmsSender;
import com.weatherdata.api.services.TwilioSmsSender;
import com.weatherdata.api.users.User;

public class SmsAlertNotifier implements AlertNotifier {
    @Override
    public void sendAlert(User user, String message) {
        SmsSender smsSender = new TwilioSmsSender();
        smsSender.sendSms(user.getMobile(), message);
    }
}
