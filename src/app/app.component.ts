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

 powers = ['hello','hi','bye'];

 power = this.powers[1];
 metadata;


 createProject(event: string)
 {
   this.metadata = event;
 }

 valuechange($event) {
   console.log($event);
   this.typed = $event;
 }




 


}
