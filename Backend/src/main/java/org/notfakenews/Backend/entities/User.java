package org.notfakenews.Backend.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class User implements Serializable {
    /**
     *
     */
    private static final long serialVersionUID = -1671331267746066264L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column(unique = true)
    @NotNull
    private String username;
    
    @Column
    @NotNull
    private String password;

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