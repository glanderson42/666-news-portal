package org.notfakenews.Backend.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@EqualsAndHashCode
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer articleId;

    @Column(nullable = false)
    @NotNull
    private String title;

    //@OneToOne(mappedBy = "authorId")
    //private Integer author;

    @Column(nullable = false)
    @NotNull
    private String conclusion;

    @Column(nullable = false)
    @NotNull
    @Size(max = 1000)
    private String content;

    @Column(nullable = false)
    @CreationTimestamp
    private LocalDateTime createdAt;
    
    @Column(nullable = false)
    @NotNull
    private Boolean isDriverArticle;
}