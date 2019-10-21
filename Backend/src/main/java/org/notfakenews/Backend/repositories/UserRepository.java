package org.notfakenews.Backend.repositories;

import java.util.Optional;

import org.notfakenews.Backend.entities.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
    public Optional<User> findByUsername(String username);
}