package com.weatherdata.api.alertsender;


import com.weatherdata.api.filter.PressureAlert;
import com.weatherdata.api.users.User;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.List;

public class RecipientRetriever {

    private List<User> allUsers;
    private final String URI = "http://localhost:8070/api/auth/users";

    public List<User> getAllUsers(){
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List<User>> users = restTemplate
                .exchange(
                        URI,
                        HttpMethod.GET,
                        null,
                        new ParameterizedTypeReference<List<User>>() {});
        allUsers = users.getBody();
        return allUsers;
    }
}
