package org.notfakenews.Backend.controllers;

import org.notfakenews.Backend.entities.Thumbnail;
import org.notfakenews.Backend.repositories.ThumbnailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/thumbnails")
public class ThumbnailController {
	@Autowired
	private ThumbnailRepository thumbnailRepository;

	@GetMapping("")
	public ResponseEntity<Iterable<Thumbnail>> getAll() {
		return ResponseEntity.ok(thumbnailRepository.findAll());
	}

	@PostMapping("")
	public ResponseEntity<Thumbnail> post(@RequestBody Thumbnail thumbnail) {
		thumbnail.setId(null);
		return ResponseEntity.ok(thumbnailRepository.save(thumbnail));
	}
}
