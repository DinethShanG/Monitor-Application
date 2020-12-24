package com.teamd.wetherapp;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryOfReadings extends MongoRepository<Readings,String> {
}
