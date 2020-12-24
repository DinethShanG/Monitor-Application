package com.teamd.wetherapp;


import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/readings")
public class DataControler {

    private RepositoryOfReadings repo;

    public DataControler(RepositoryOfReadings repo) {
        this.repo = repo;
    }

    @GetMapping("/all")
    public List<Readings> getAll(){
        List<Readings> readings =this.repo.findAll();
        return readings;
    }

    @PutMapping
    public void insert(@RequestBody Readings readings){
        this.repo.insert(readings);
    }

    @PostMapping
    public void update(@RequestBody Readings readings){
        this.repo.save(readings);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") String id){
        this.repo.deleteById(id);
    }
}
