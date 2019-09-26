package org.notfakenews.Backend.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@EqualsAndHashCode
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    @NotNull
    private String username;

    @Column(nullable = false)
    @NotNull
    private String password;

    @Column(nullable = false)
    @CreationTimestamp
    private LocalDateTime createdAt;

    public User(String uname, String passwd) {
        this.username = uname;
        this.password = new BCryptPasswordEncoder().encode(passwd);
    }
}