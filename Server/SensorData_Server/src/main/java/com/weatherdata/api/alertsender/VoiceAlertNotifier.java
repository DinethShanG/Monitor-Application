package com.weatherdata.api.alertsender;

import com.weatherdata.api.services.TwilioVoiceSender;
import com.weatherdata.api.services.VoiceSender;
import com.weatherdata.api.users.User;

import java.net.URISyntaxException;

public class VoiceAlertNotifier implements AlertNotifier{
    @Override
    public void sendAlert(User user, String message) throws URISyntaxException {
        VoiceSender voiceSender =new TwilioVoiceSender();
        voiceSender.sendVoice(user.getMobile(), message);
    }
}
