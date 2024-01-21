package com.example.demo;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class GreetingController {

    @GetMapping("/greet")
    public String Greet(@RequestParam String name) {
        return "Hello, " + name + "! Your name has " + name.length() + " characters.";
    }
}
