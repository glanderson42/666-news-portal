package org.notfakenews.Backend.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    @NotNull
    private String username;

    @Column
    @NotNull
    private String password;
    
    @OneToMany(mappedBy = "author")
    @JsonIgnore
    private List<Article> articles;

    public String getUsername() {
		return this.username;
    }

    public String getPassword() {
        return this.password;
    }

	public void setId(Integer id2) {
        this.id = id2;
    }
}