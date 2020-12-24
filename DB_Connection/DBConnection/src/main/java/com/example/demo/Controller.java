package com.example.demo;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("User")
public class Controller {
    private UserRepository userRepository;

    public Controller(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping(value= "/all")
    public List<User> getAll(){
        List<User> user=this.userRepository.findAll();
        return user;


    }
    @PutMapping
    public void insert(@RequestBody User customer){
        this.userRepository.insert(customer);
    }
    @PostMapping
    public void update(@RequestBody User user){
        this.userRepository.save(user);
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") String id){
        this.userRepository.deleteById(id);
    }

    @GetMapping("/{id}")
    public Optional<User> getById(@PathVariable("id") String id){
        Optional<User> user =this.userRepository.findById(id);
        return user;
    }
}
