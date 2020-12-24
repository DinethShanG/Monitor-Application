package com.weatherdata.api;



import com.weatherdata.api.dbconnector.SensorRepository;
import com.weatherdata.api.filter.AlertTrigger;
import com.weatherdata.api.model.Sensor;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;


@RestController
@RequestMapping("/sensor")
public class SensorController {

    private SensorRepository sensorRepository;
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
    public String insert( String sensor_id,String timestamp,String data_value){

        double thresholdValue=20;//todo how to get thesegfggf

        AlertTrigger alertTrigger=new AlertTrigger(thresholdValue);
        boolean isExceeded=alertTrigger.isExceeded(Double.parseDouble(data_value));

        Sensor sensor =new Sensor(sensor_id,timestamp,data_value,thresholdValue,isExceeded);
        this.sensorRepository.insert(sensor);

        return "successful adding";
    }


}
