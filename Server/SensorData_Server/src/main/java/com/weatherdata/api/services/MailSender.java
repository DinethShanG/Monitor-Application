package com.weatherdata.api.services;

import java.io.IOException;

public interface MailSender {
    void sendMail(String email,String message) throws IOException;
}
