package com.weatherdata.api.services;

public interface SmsSender {
    void sendSms(String mobile,String message);
}
