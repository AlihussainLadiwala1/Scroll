import {
  Component,
  OnInit,
  Injectable,
  Input,
  EventEmitter,
  Output
} from '@angular/core';
import {
  HomeService
} from './home.service';
import {
  Http
} from '@angular/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})

export class HomeComponent implements OnInit {
  data = [];
  flag = false;
  flag1 = true;
  x;
  y;
  slug = 'empty';
  term = 'N';
  Key;
  finalKey;

  @Input() data1;
  @Input() data2;
  // tslint:disable-next-line:no-output-on-prefix
 
  d;

  d1;

  movies = new BehaviorSubject([]);
  movies1 = new BehaviorSubject([]);
    batch = 15;         // size of each query
    lastKey;      // key to offset next query from
    finished = false;  // boolean when end of database is reached
    // tslint:disable-next-line:no-output-on-prefix
    @Output() createProject = new EventEmitter<any>();
    @Output() Image = new EventEmitter<any>();
    @Output() Brand = new EventEmitter<any>();
    @Output() ModelName = new EventEmitter<any>();
    metaData = [];
    constructor(private movieService: HomeService) {

    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnChanges() {
      console.log('hussain');
      this.d = this.data1;
      console.log(this.d);
    
      this.d1 = this.data2;
      this.movies.next([]);
     this.movies1.next([]);
    
   //  this.finished = false;
     this.lastKey = undefined;
     this.finished = false;
      this.getMovies();
      
   

    }


   

   
  ngOnInit() {
   // this.getMovies();
   // this.getMovies();
 /* constructor(private http: Http) {
    this.http.get('https://phonemodels-4e5a4.firebaseio.com/.json')
      .subscribe(res => {
        this.data = res.json();
        console.log(this.data);
      });*/
    
      //this.getMovies();




  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy()
  {
    
  }

  doSomething(item: string, image: string, brand: string, ModelName: string, resolution: string, size: string)
  {
    console.log(item);
    this.metaData.push(item);
    this.metaData.push(image);
    this.metaData.push(ModelName);
    this.metaData.push(resolution);
    this.metaData.push(size);

    this.createProject.emit(this.metaData);
  /*  this.Image.emit(image);
    this.Brand.emit(brand);
    this.ModelName.emit(ModelName);*/
  }

  onScroll () {
    console.log('scrolled!!');
   // this.movies = new BehaviorSubject([]);
   // this.lastKey = undefined;
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
         //   console.log(search.search('z'));
            this.lastKey = _.last(movies)['FIELD2'];
            console.log(this.lastKey);
            const newMovies = _.slice(movies, 0, this.batch);
            /// Get current movies in BehaviorSubject
            const currentMovies = this.movies.getValue();
            /// If data is identical, stop making queries
            if (this.lastKey === _.last(newMovies)['FIELD2']) {
              console.log('hello');
              this.finished = true;
            }
            console.log(newMovies);
            /// Concatenate new movies to current movies

            this.movies.next( _.concat(currentMovies, newMovies) );


            if(this.d1 && this.d1 !== '')
            {
                var fullTextSearch = require('full-text-search');
                var search = new fullTextSearch();
                search.drop();
                this.flag1  = false;
                this.movies1 = this.movies;

              for (var i=0 ; i < this.movies1.value.length ; i++)
              {
                  //  console.log(this.movies.value[i]);
                  if(this.d === 'Brand Name')
                  {
                    search.add( this.movies1.value[i] , filter);
                  }
                  if(this.d === 'OS Type')
                  {
                    search.add( this.movies1.value[i] , filter1);
                  }
              }
            //  console.log(newMovies);
              if(search.search(this.d1).length < 16)
              {
                //this.batch = this.batch * 4;
                this.onScroll();
              }
            //  this.data.push(search.search(this.d1));
              console.log(this.data);
              this.movies1.next(search.search(this.d1));
            }
            else
            {
              this.movies1 = this.movies;

            }
          })
          .take(1)
          .subscribe();
    return;
        }

 


    var filter = function (key, val) {
      // Return false if you want to ignore field 
   

      if (key === 'FIELD2')
       {
          return true;   // Ignore field 
      }
   
      return false;    // Accept field 
  };


  var filter1 = function (key, val) {
    // Return false if you want to ignore field 
 

    if (key === 'FIELD2')
     {
        return true;   // Ignore field 
    }
 
    return false;    // Accept field 
};


}




