package org.notfakenews.Backend.repositories;

import org.notfakenews.Backend.entities.Article;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticleRepository extends CrudRepository<Article, Integer> {
    
}