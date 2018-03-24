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


  ngOnInit() {}
  constructor(private http: Http) {
    this.http.get('https://phonemodels-4e5a4.firebaseio.com/.json')
      .subscribe(res => {
        this.data = res.json();
        console.log(this.data);
      });


  }

  fireEvent($event, stat, item) {
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
    }


}

}
