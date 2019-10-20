package org.notfakenews.Backend.controllers;

import java.util.Optional;

import org.notfakenews.Backend.entities.Article;
import org.notfakenews.Backend.entities.Comment;
import org.notfakenews.Backend.repositories.ArticleRepository;
import org.notfakenews.Backend.repositories.AuthorRepository;
import org.notfakenews.Backend.repositories.CommentRepository;
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
@RequestMapping("/api/v1/article")
public class ArticleController {
    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private AuthorRepository authorRepository;

    @Autowired
    private CommentRepository commentRepository;

    @GetMapping("/")
    public ResponseEntity<Iterable<Article>> getAll() {
        return ResponseEntity.ok(articleRepository.findAll());
    }


    @GetMapping("/{id}")
    public ResponseEntity<Article> get(@PathVariable Integer id) {
        Optional<Article> article = articleRepository.findById(id);
        if(article.isPresent()) {
            return ResponseEntity.ok(article.get());
        }

        return ResponseEntity.notFound().build();
    }


    @PostMapping("/")
    public ResponseEntity<Article> post(@RequestBody Article article) {
        Article savedArticle = articleRepository.save(article);
        return ResponseEntity.ok(savedArticle);
    }


    @PutMapping("/{id}")
    public ResponseEntity<Article> put(@RequestBody Article article, @PathVariable Integer id) {
        Optional<Article> dbArticle = articleRepository.findById(id);
        if(dbArticle.isPresent()) {
            article.setId(id);
            return ResponseEntity.ok(articleRepository.save(article));
        }

        return ResponseEntity.notFound().build();
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Article> delete(@PathVariable Integer id) {
        Optional<Article> dbArticle = articleRepository.findById(id);
        if(dbArticle.isPresent()) {
            articleRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }

        return ResponseEntity.notFound().build();
    }


    @GetMapping("/{id}/comments")
    public ResponseEntity<Iterable<Comment>> comments(@PathVariable Integer id) {
        Optional<Article> dbArticle = articleRepository.findById(id);
        if(dbArticle.isPresent()) {
            return ResponseEntity.ok(dbArticle.get().getComments());
        }

        return ResponseEntity.notFound().build();
    }
}