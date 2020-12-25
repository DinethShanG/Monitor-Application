package com.weatherdata.api.controller;



import com.weatherdata.api.dbconnector.SensorRepository;
import com.weatherdata.api.filter.AlertTriggerFactory;
import com.weatherdata.api.filter.Alert;
import com.weatherdata.api.filter.AlertType;
import com.weatherdata.api.model.Sensor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URISyntaxException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;


@RestController
@RequestMapping("/sensor")
public class SensorController {

    private SensorRepository sensorRepository;
    private AlertType alertType;
    public SensorController(SensorRepository sensorRepository) {
        this.sensorRepository = sensorRepository;
    }


    @GetMapping("/getAlert")
    public List<Sensor> getAlert(){
        String date;
        boolean isExceeded=true;

        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDateTime dateTime = LocalDateTime.now();
        date=dtf.format(dateTime);

        List<Sensor> readings =this.sensorRepository.findByTimestampAndExceeded(date,isExceeded);
        return readings;
    }



    @GetMapping("/getById")
    public List<Sensor> getById(String sensorId){

        List<Sensor> readings =this.sensorRepository.findBySensorId(sensorId);
        return readings;
    }


    @PostMapping("/setValue")
    public String insert( String sensorId,String timestamp,String dataValue){

        if(sensorId.equals("1") || sensorId.equals("2") || sensorId.equals("3")){
            alertType = new AlertTriggerFactory().getAlertType(sensorId);
            Sensor sensor = null;
            try {
                sensor = new Sensor(sensorId,timestamp,dataValue,alertType.getThreshold()
                        ,alertType.isExceeded(Double.parseDouble(dataValue)));
            } catch (IOException | URISyntaxException e) {
                e.printStackTrace();
            }
            this.sensorRepository.insert(sensor);
            return "Sensor data send Successfully";
        }
        else{
            return "Invalid Sensor ID !!!";
        }
    }


}
