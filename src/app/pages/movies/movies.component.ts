import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MovieService } from './movie.service';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  moviesList:Array<any>;

  constructor(private dialog:MatDialog, private movieService:MovieService) { }

  ngOnInit() {
    this.movieService.getMovies()
      .then(response => {
        console.log('Movies', response);
        this.moviesList = response;
      })
      .catch(err => {
        console.error(err);
      })
  }

  openDetails(movie) {
    this.dialog.open(MovieDetailsComponent, {
      data: movie
    });
  }

}
