package org.notfakenews.Backend.controllers;

import java.util.Optional;

import org.notfakenews.Backend.entities.Author;
import org.notfakenews.Backend.repositories.AuthorRepository;
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
@RequestMapping("/api/v1/author")
public class AuthorController {
    @Autowired(required = true)
    private AuthorRepository authorRepository;

    @PostMapping("/register")
    public ResponseEntity<Author> register(@RequestBody Author author) {
        Optional<Author> dbAuthor = authorRepository.findByUsername(author.getUsername());
        
        if(dbAuthor.isPresent()) {
            return ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(authorRepository.save(author));
    }


    @PostMapping("/login")
    public ResponseEntity<Author> login(@RequestBody String authorname) {
        Optional<Author> dbAuthor = authorRepository.findByUsername(authorname);

        if(!dbAuthor.isPresent()) {
            return ResponseEntity.status(401).build();
        }

        return ResponseEntity.ok(dbAuthor.get());
    }


    @GetMapping("")
    public ResponseEntity<Iterable<Author>> getAll() {
        return ResponseEntity.ok(authorRepository.findAll());
    }


    @GetMapping("/{id}")
    public ResponseEntity<Author> get(@PathVariable Integer id) {
        Optional<Author> dbAuthor = authorRepository.findById(id);
        if(!dbAuthor.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(dbAuthor.get());
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Author> delete(@PathVariable Integer id) {
        Optional<Author> dbAuthor = authorRepository.findById(id);

        if(!dbAuthor.isPresent()) {
            ResponseEntity.notFound();
        }

        authorRepository.delete(dbAuthor.get());
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Author> put(@PathVariable Integer id, @RequestBody Author author) {
        Optional<Author> oldAuthor = authorRepository.findById(id);
        
        if(!oldAuthor.isPresent()) {
            ResponseEntity.notFound();
        }

        oldAuthor.get().setId(id);
        return ResponseEntity.ok(authorRepository.save(author));
    }
}