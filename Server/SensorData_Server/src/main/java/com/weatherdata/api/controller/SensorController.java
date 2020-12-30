package com.weatherdata.api.controller;



import com.weatherdata.api.dbconnector.SensorRepository;
import com.weatherdata.api.filter.AlertTriggerFactory;
import com.weatherdata.api.filter.Alert;
import com.weatherdata.api.filter.AlertType;
import com.weatherdata.api.model.Sensor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URISyntaxException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/sensor")
public class SensorController {

    private SensorRepository sensorRepository;
    private AlertType alertType;

    public SensorController(SensorRepository sensorRepository) {
        this.sensorRepository = sensorRepository;
    }



    @PostMapping("/setAlert")
    public String insert( String sensorId,String dataValue,String threshold) throws IOException, URISyntaxException {

        if(sensorId.equals("1") || sensorId.equals("2") || sensorId.equals("3")){
            alertType = new AlertTriggerFactory().getAlertType(sensorId);
            alertType.triggerAlert(dataValue,threshold);
            return "Sensor data send Successfully";
        }
        else{
            return "Invalid Sensor ID !!!";
        }
    }



    @GetMapping("/getAlert")
    public List<Sensor> getAlert(){
        String date;
        String exceeded="true";
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDateTime today = LocalDateTime.now();
        date=dtf.format(today);
        List<Sensor> readings =this.sensorRepository.findByDateAndExceeded(date,exceeded);
        return readings;
    }

    @GetMapping("/getAlertSensorId")
    public List<Sensor> getAlertSensorId(String sensorId){
        String exceeded="true";
        List<Sensor> readings =this.sensorRepository.findByExceededAndSensorId(exceeded,sensorId);
        return readings;
    }



    @GetMapping("/getById")
    public List<Sensor> getById(String sensorId){
        List<Sensor> readings =this.sensorRepository.findBySensorId(sensorId);
        return readings;
    }
}
