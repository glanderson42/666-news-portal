package org.notfakenews.Backend.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Article implements Serializable {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
	@Column
	private String name;
	
    @JoinColumn
    @ManyToOne
    private User user;
    
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Date postDate;
    
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Date modifiedDate;
    
    @Column
    private String summary;
    
    @Column
    private String content;
    
    @JoinColumn
    @OneToMany
    private List<Thumbnail> thumbnails;
    
}
