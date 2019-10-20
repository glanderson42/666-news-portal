package org.notfakenews.Backend.repositories;

import org.notfakenews.Backend.entities.Thumbnail;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ThumbnailRepository extends CrudRepository<Thumbnail, Integer> {
    
}