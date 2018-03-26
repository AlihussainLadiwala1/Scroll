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

 power = this.powers[0];
 metadata;
 img;
 brand;
 resolution;
 size;
 os;
 chipset;
 internalMem;
 ram;
 primaryCam;
 Battery;


 createProject(event: string)
 {
   this.metadata = event[0];
   this.img = event[1];
   this.brand = event[2];
   this.resolution = event[3];
   this.size = event[4];
   this.os = event[5];
   this.chipset = event[6];
   this.internalMem = event[7];
   this.ram = event[8];
   this.primaryCam = event[9];
   this.Battery = event[10];


   console.log(event);

 }

 





 valuechange($event) {
   console.log($event);
   this.typed = $event;
 }




 


}
