package com.weatherdata.api.services;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Call;
import com.twilio.twiml.TwiMLException;
import com.twilio.twiml.VoiceResponse;
import com.twilio.twiml.voice.Say;
import com.twilio.type.PhoneNumber;

import javax.naming.AuthenticationException;
import java.net.URI;
import java.net.URISyntaxException;


public class TwilioVoiceSender implements VoiceSender{
    private boolean success;
    @Override
    public void sendVoice(String mobile, String message) {
        success = false;
        try {
            Twilio.init(System.getenv("ACCOUNT_SID"), System.getenv("AUTH_TOKEN"));
            Say say = new Say.Builder(message).build();
            VoiceResponse response = new VoiceResponse.Builder().say(say).build();
            Call call = Call.creator(
                    new com.twilio.type.PhoneNumber(mobile),
                    new com.twilio.type.PhoneNumber("+17543991081"),
                    new com.twilio.type.Twiml(response.toXml()))
                    .create();
            success = true;
        } catch (Exception e) {
            System.out.println("Voice calling to "+mobile+" was Unsuccessful !!!");
        }
        if(success){
            System.out.println("Voice call has send to "+ mobile + " Successfully !!!");
        }
    }

}
