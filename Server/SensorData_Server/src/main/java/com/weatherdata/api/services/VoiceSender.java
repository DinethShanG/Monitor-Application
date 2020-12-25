package com.weatherdata.api.services;

import java.net.URISyntaxException;

public interface VoiceSender {
    void sendVoice(String mobile,String message) throws URISyntaxException;
}
