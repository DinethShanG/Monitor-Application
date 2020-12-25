package com.weatherdata.api.alertsender;

import com.weatherdata.api.services.MailSender;
import com.weatherdata.api.services.SendgridMailSender;
import com.weatherdata.api.users.User;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class MailAlertNotifier implements AlertNotifier {
    private MailSender mailSender;
    @Override
    public void sendAlert(User user, String message) throws IOException {
        mailSender = new SendgridMailSender();
        mailSender.sendMail(user.getEmail(),message);
    }
}
