import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HomeService} from './home/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  typed;

 constructor( private homeService: HomeService) {
 }

 powers = ['Brand Name', 'OS Type'];

 power = this.powers[1];
 metadata;
 img;
 brand;
 resolution;
 size;


 createProject(event: string)
 {
   this.metadata = event[0];
   this.img = event[1];
   this.brand = event[2];
   this.resolution = event[3];
   this.size = event[4];


   console.log(event);

 }

 





 valuechange($event) {
   console.log($event);
   this.typed = $event;
 }




 


}
