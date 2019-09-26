package org.notfakenews.Backend.controllers;

import java.util.Optional;

import org.notfakenews.Backend.entities.User;
import org.notfakenews.Backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/v1")
public class UserController {
    @Autowired
    private UserRepository userRepo;

    @GetMapping("/users")
    public ResponseEntity<Iterable<User>> getAll() {
        return ResponseEntity.ok(userRepo.findAll());
    }
 
    @GetMapping("/user/{id}")
    public ResponseEntity<User> get(@PathVariable Integer id) {
        Optional<User> user = userRepo.findById(id);
        if(!user.isPresent()) {
            ResponseEntity.notFound();
        }

        return ResponseEntity.ok(user.get());
    }

    @PostMapping("/user")
    public ResponseEntity<User> post(@RequestBody User user) {
        User newUser = userRepo.save(user);
        return ResponseEntity.ok(newUser);
    }
}