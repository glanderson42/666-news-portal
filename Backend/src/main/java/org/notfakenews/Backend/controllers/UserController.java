package org.notfakenews.Backend.controllers;

import java.util.Optional;

import org.notfakenews.Backend.entities.User;
import org.notfakenews.Backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {
    @Autowired(required = true)
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        Optional<User> dbUser = userRepository.findByUsername(user.getUsername());
        
        if(dbUser.isPresent()) {
            return ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(userRepository.save(user));
    }


    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody String username) {
        Optional<User> dbUser = userRepository.findByUsername(username);

        if(!dbUser.isPresent()) {
            return ResponseEntity.status(401).build();
        }

        return ResponseEntity.ok(dbUser.get());
    }


    @GetMapping("")
    public ResponseEntity<Iterable<User>> getAll() {
        return ResponseEntity.ok(userRepository.findAll());
    }


    @GetMapping("/{id}")
    public ResponseEntity<User> get(@PathVariable Integer id) {
        Optional<User> dbUser = userRepository.findById(id);
        if(!dbUser.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(dbUser.get());
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<User> delete(@PathVariable Integer id) {
        Optional<User> dbUser = userRepository.findById(id);

        if(!dbUser.isPresent()) {
            ResponseEntity.notFound();
        }

        userRepository.delete(dbUser.get());
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> put(@PathVariable Integer id, @RequestBody User user) {
        Optional<User> oldUser = userRepository.findById(id);
        
        if(!oldUser.isPresent()) {
            ResponseEntity.notFound();
        }

        oldUser.get().setId(id);
        return ResponseEntity.ok(userRepository.save(user));
    }
}