package org.notfakenews.Backend.repositories;

import java.util.Optional;

import org.notfakenews.Backend.entities.Author;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorRepository extends CrudRepository<Author, Integer> {
    Optional<Author> findByUsername(String username);
}