package com.weatherdata.api.dbconnector;


import com.weatherdata.api.model.Sensor;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface SensorRepository extends MongoRepository<Sensor,String> {

     List<Sensor> findByTimestampAndExceeded(String timestamp,boolean exceeded);
    
}
