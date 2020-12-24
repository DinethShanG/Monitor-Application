package com.weatherdata.api.dbconnector;

public class DbSeeder {
    SensorRepository sensorRepository;

        public DbSeeder(SensorRepository sensorRepository) {
            this.sensorRepository = sensorRepository;
        }
}
