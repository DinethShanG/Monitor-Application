package com.example.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


import java.util.List;


@Component
public class DbSeeder implements CommandLineRunner {
 private UserRepository userRepository;
    private User Randi;
    private User Thilina;
    private User Dineth;

    public DbSeeder(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @Override
    public void run(String... args) throws Exception {
        User c1 = new User(
                "001",
                "Randi",
                "abc@gmail.com",
                "1234"
        );
        User c2 = new User(
                "002",
                "Thilina",
                "def@gmail.com",
                "5678"
        );
        User c3 = new User(
                "003",
                "Dineth",
                "ghi@gmail.com",
                "91011"
        );

        User c4 = new User(
                "004",
                "Joshiya",
                "jkl@gmail.com",
                "1213"
        );

        //drop all Customer
        this.userRepository.deleteAll();

        //add customers into database
        //List<Customer> customers= Arrays.asList(Randi,Thilina,Dineth);
        //this.customerRepository.saveAll(customers);

        userRepository.save(c1);
        userRepository.save(c2);
        userRepository.save(c3);
        userRepository.save(c4);

        System.out.println("*****************************");

        List<User> user = userRepository.findAll();

        for (User c : user) {

            System.out.println(c.toString());


        }

    }}
