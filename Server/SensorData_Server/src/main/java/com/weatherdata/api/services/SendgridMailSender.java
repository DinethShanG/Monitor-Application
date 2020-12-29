package com.weatherdata.api.services;

import com.sendgrid.*;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component()
public class SendgridMailSender implements MailSender{
    @Override
    public void sendMail(String email, String message) throws IOException {

        try{
            Email from = new Email("dsgimhana@gmail.com");
            String subject = "Monitor Application Alert !!!";
            Email to = new Email(email);
            Content content = new Content("text/plain", message);
            Mail mail = new Mail(from, subject, to, content);
            SendGrid sg = new SendGrid(System.getenv("SENDGRID_API_KEY"));
            Request request = new Request();
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());
            Response response = sg.api(request);
            if(response.getStatusCode()== 202){
                System.out.println("Email Send to "+email+" Successfully!");
            }
            else{
                System.out.println("Email Sending to "+email+" is Unsuccessful!!!");
            }
        } catch (Exception e) {
            System.out.println("Email Sending to "+email+" is Unsuccessful!!!");
        }
    }
}
