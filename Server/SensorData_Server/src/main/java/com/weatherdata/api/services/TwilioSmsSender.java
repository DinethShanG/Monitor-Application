package com.weatherdata.api.services;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

public class TwilioSmsSender implements SmsSender {
    private boolean success;

    @Override
    public void sendSms(String mobile, String sms) {
        success = false;
        try{
            Twilio.init(System.getenv("ACCOUNT_SID"), System.getenv("AUTH_TOKEN"));
            Message message = Message
                    .creator(new PhoneNumber(mobile), // to
                            new PhoneNumber("+17543991081"), // from
                            sms)
                    .create();
            success = true;
        } catch (Exception e) {
            System.out.println("SMS sending to "+mobile+" was Unsuccessful !!!");
        }
        if(success){
            System.out.println("Sms has send to "+ mobile + " Successfully !!!");
        }
    }
}