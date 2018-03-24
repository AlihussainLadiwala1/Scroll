import {
  Component,
  OnInit,
  Injectable
} from '@angular/core';
import {
  HomeService
} from './home.service';
import {
  Http
} from '@angular/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})

export class HomeComponent implements OnInit {
  data = [];
  flag = false;
  x;
  y;
  slug = 'empty';

  movies = new BehaviorSubject([]);
    batch = 12;         // size of each query
    lastKey;      // key to offset next query from
    finished = false;  // boolean when end of database is reached

    constructor(private movieService: HomeService) { }
  ngOnInit() {
 /* constructor(private http: Http) {
    this.http.get('https://phonemodels-4e5a4.firebaseio.com/.json')
      .subscribe(res => {
        this.data = res.json();
        console.log(this.data);
      });*/
      this.getMovies();


  }

  onScroll () {
    console.log('scrolled!!');
    this.getMovies();
  }

  /*fireEvent($event, stat, item) {
    this.x = $event.pageX + 20;
    this.y = $event.pageY;
    if (item) {
    this.slug = item;
    }
 //   console.log(this.x);
 //   console.log(this.y);
    if (stat === 'mouseEnter') {
        this.flag = true;
        console.log(this.flag);
    } else {
        this.flag = false;
        console.log(this.flag);
    }*/

    private getMovies(key?) {
      if (this.finished) { return; }
      this.movieService
          .getMovies(this.batch + 1, this.lastKey).do(movies => {
            /// set the lastKey in preparation for next query
            console.log(movies);
            this.lastKey = _.last(movies)['id'];
            console.log(this.lastKey);
            const newMovies = _.slice(movies, 0, this.batch);
            /// Get current movies in BehaviorSubject
            const currentMovies = this.movies.getValue();
            /// If data is identical, stop making queries
            if (this.lastKey === _.last(newMovies)['id']) {
              console.log('hello');
              this.finished = true;
            }
            /// Concatenate new movies to current movies
            this.movies.next( _.concat(currentMovies, newMovies) );
          })
          .take(1)
          .subscribe();
    }


}


